export interface PaymentMethod {
  type: string;
  channel: string;
  channelProperties: Record<string, any>;
}

export interface XenditPaymentMethod {
  type: string;
  channel_code: string;
  channel_properties: Record<string, any>;
}

export interface Xendit {
  paymentId: string;
  externalId: string;
  status: string;
  created: Date;
  updated: Date;
  paymentMethod: XenditPaymentMethod;
  response: {
    initial: Record<string, any>;
    callback: Record<string, any>;
    error: any;
  };
  webhookReceived: boolean;
  webhookTimestamp: Date | null;
  checkoutUrl: string;
  qrCode: string;
  virtualAccountNumber: string;
}

export interface Client {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  business: {
    name: string;
    taxId: string;
    type: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  metadata: {
    customerSince: Date | null;
    totalTransactions: number;
    lifetimeValue: number;
    segment: string;
  };
}

export interface Item {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  category: string;
  metadata: Record<string, any>;
}

export interface Fees {
  platformFee: number;
  xenditFee: number;
  totalFee: number;
  netAmount: number;
}

export interface StatusHistory {
  status: string;
  timestamp: Date;
  reason: string;
  updatedBy: string;
}

export interface Company {
  id: string;
  name: string;
  branch: string;
  department: string;
  salesPerson: string;
}

export interface Metadata {
  source: string;
  ipAddress: string;
  userAgent: string;
  device: string;
  campaign: string;
  utmParameters: {
    source: string;
    medium: string;
    campaign: string;
    term: string;
    content: string;
  };
  customFields: Record<string, any>;
}

export interface Transaction {
  id: string;
  userId: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  currency: string;
  description: string;
  merchantName: string;
  paymentMethod: PaymentMethod;
  xendit: Xendit;
  client: Client;
  items: Item[];
  fees: Fees;
  status: string;
  statusHistory: StatusHistory[];
  company: Company;
  metadata: Metadata;
}


// Details of the seller's receiving bank account
export interface SellerBankAccount {
  bankName: string;
  accountName: string;
  accountNumber: string;
  currency: string;
  isPrimary: boolean;
  metadata: Record<string, any>; // For bank-specific or internal notes
}

// Details of the Payout initiation and tracking
export interface PayoutDetails {
  payoutId: string;
  externalId: string; // ID used by the payout service (e.g., Xendit's)
  status: string; // e.g., 'REQUESTED', 'PENDING', 'COMPLETED', 'FAILED'
  amount: number;
  currency: string;
  fee: number; // Fee deducted from the payout amount
  netAmount: number; // amount - fee
  description: string;
  referenceId: string; // Internal reference ID
  paymentMethod: {
    type: string; // e.g., 'BANK_TRANSFER'
    channel: string; // e.g., 'BCA', 'BDO', 'MANDIRI'
  };
  response: {
    initial: Record<string, any>;
    callback: Record<string, any>;
    error: any;
  };
}

// The core Payout interface
export interface Payout {
  id: string;
  companyId: string; // Links to the seller's company
  userId: string; // Links to the user/person managing the payout (optional, but good for tracking)
  createdAt: Date;
  updatedAt: Date;
  scheduledDate: Date; // When the payout is scheduled to be processed
  processedDate: Date | null; // When the payout was actually completed/failed

  // The total amount of the payout before fees
  totalAmount: number;

  // The actual details of the transaction to the seller
  payoutDetails: PayoutDetails;

  // Seller's receiving bank account information
  sellerAccount: SellerBankAccount;

  // A record of which transactions are included in this payout (optional, but highly recommended)
  // This helps track the source of the funds
  sourceTransactions: {
    transactionId: string;
    amount: number;
    fee: number;
  }[];

  // The status history for the payout (reusing StatusHistory from Transaction model)
  statusHistory: StatusHistory[];

  // Company details of the seller (reusing Company from Transaction model)
  // This makes the Payout model self-contained with seller context
  company: Company;

  // General metadata for the payout
  metadata: {
    type: string; // e.g., 'WEEKLY_PAYOUT', 'ADJUSTMENT'
    batchId: string | null;
    customFields: Record<string, any>;
  };
}
