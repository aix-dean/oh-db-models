# oh-db-models

Database models for Firestore, providing TypeScript interfaces for reusable data structures in Next.js projects.

## Installation

Install via npm:

```bash
npm install oh-db-models
```

Or install directly from GitHub (replace `yourusername` with your GitHub username):

```bash
npm install github:yourusername/oh-db-models
```

## Usage

Import the Transaction interface in your Next.js project:

```typescript
import { Transaction, Payout, SellerBankAccount, PayoutDetails } from 'oh-db-models';

// Example usage in an API route or component
const transaction: Transaction = {
  id: 'txn_123',
  userId: 'user_456',
  companyId: 'company_789',
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 100000, // in cents
  currency: 'IDR',
  description: 'Payment for services',
  merchantName: 'Example Merchant',
  paymentMethod: {
    type: 'EWALLET',
    channel: 'OVO',
    channelProperties: {}
  },
  xendit: {
    paymentId: 'xendit_payment_123',
    externalId: 'ext_123',
    status: 'PENDING',
    created: new Date(),
    updated: new Date(),
    paymentMethod: {
      type: 'EWALLET',
      channel_code: 'ID_OVO',
      channel_properties: {}
    },
    response: {
      initial: {},
      callback: {},
      error: null
    },
    webhookReceived: false,
    webhookTimestamp: null,
    checkoutUrl: '',
    qrCode: '',
    virtualAccountNumber: ''
  },
  client: {
    id: 'client_123',
    type: 'individual',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+628123456789',
    business: {
      name: '',
      taxId: '',
      type: ''
    },
    address: {
      street: 'Jl. Example 123',
      city: 'Jakarta',
      state: 'DKI Jakarta',
      postalCode: '12345',
      country: 'ID'
    },
    contactPerson: {
      name: '',
      position: '',
      email: '',
      phone: ''
    },
    billingAddress: {
      street: 'Jl. Example 123',
      city: 'Jakarta',
      state: 'DKI Jakarta',
      postalCode: '12345',
      country: 'ID'
    },
    metadata: {
      customerSince: null,
      totalTransactions: 0,
      lifetimeValue: 0,
      segment: 'new'
    }
  },
  items: [
    {
      id: 'item_1',
      name: 'Service Fee',
      description: 'Monthly service fee',
      quantity: 1,
      price: 100000,
      total: 100000,
      category: 'service',
      metadata: {}
    }
  ],
  fees: {
    platformFee: 0,
    xenditFee: 0,
    totalFee: 0,
    netAmount: 100000
  },
  status: 'PENDING',
  statusHistory: [
    {
      status: 'PENDING',
      timestamp: new Date(),
      reason: '',
      updatedBy: 'system'
    }
  ],
  company: {
    id: 'company_789',
    name: 'Example Company',
    branch: '',
    department: '',
    salesPerson: ''
  },
  metadata: {
    source: 'web',
    ipAddress: '192.168.1.1',
    userAgent: 'Mozilla/5.0...',
    device: 'desktop',
    campaign: '',
    utmParameters: {
      source: '',
      medium: '',
      campaign: '',
      term: '',
      content: ''
    },
    customFields: {}
  }
};

const payout: Payout = {
  id: 'payout_123',
  companyId: 'company_789',
  userId: 'user_456',
  createdAt: new Date(),
  updatedAt: new Date(),
  scheduledDate: new Date(),
  processedDate: null,
  totalAmount: 95000,
  payoutDetails: {
    payoutId: 'xendit_payout_456',
    externalId: 'ext_payout_456',
    status: 'REQUESTED',
    amount: 95000,
    currency: 'IDR',
    fee: 5000,
    netAmount: 90000,
    description: 'Weekly payout for sales',
    referenceId: 'ref_payout_789',
    paymentMethod: {
      type: 'BANK_TRANSFER',
      channel: 'BCA'
    },
    response: {
      initial: {},
      callback: {},
      error: null
    }
  },
  sellerAccount: {
    bankName: 'BCA',
    accountName: 'John Doe',
    accountNumber: '1234567890',
    currency: 'IDR',
    isPrimary: true,
    metadata: {}
  },
  sourceTransactions: [
    {
      transactionId: 'txn_123',
      amount: 100000,
      fee: 5000
    }
  ],
  statusHistory: [
    {
      status: 'REQUESTED',
      timestamp: new Date(),
      reason: 'Initiated by system',
      updatedBy: 'system'
    }
  ],
  company: {
    id: 'company_789',
    name: 'Example Company',
    branch: 'Main',
    department: 'Sales',
    salesPerson: 'Jane Smith'
  },
  metadata: {
    type: 'WEEKLY_PAYOUT',
    batchId: 'batch_001',
    customFields: {}
  }
};
```

## Models

- **Transaction**: Comprehensive interface for payment transactions, including Xendit payment details, client information, transaction items, fees, status tracking, and metadata.
- **Payout**: Interface for disbursing payments to sellers, including payout details, seller bank account information, source transactions, and status tracking.

## Development

To build the package:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT