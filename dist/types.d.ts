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
export interface SellerBankAccount {
    bankName: string;
    accountName: string;
    accountNumber: string;
    currency: string;
    isPrimary: boolean;
    metadata: Record<string, any>;
}
export interface PayoutDetails {
    payoutId: string;
    externalId: string;
    status: string;
    amount: number;
    currency: string;
    fee: number;
    netAmount: number;
    description: string;
    referenceId: string;
    paymentMethod: {
        type: string;
        channel: string;
    };
    response: {
        initial: Record<string, any>;
        callback: Record<string, any>;
        error: any;
    };
}
export interface Payout {
    id: string;
    companyId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    scheduledDate: Date;
    processedDate: Date | null;
    totalAmount: number;
    payoutDetails: PayoutDetails;
    sellerAccount: SellerBankAccount;
    sourceTransactions: {
        transactionId: string;
        amount: number;
        fee: number;
    }[];
    statusHistory: StatusHistory[];
    company: Company;
    metadata: {
        type: string;
        batchId: string | null;
        customFields: Record<string, any>;
    };
}
//# sourceMappingURL=types.d.ts.map