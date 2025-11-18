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

This package now organizes types into feature-based modules for better maintainability and scalability. You can import types either from the main entry point or directly from their feature-specific paths.

### Importing from the Main Entry Point (re-exports all types)

```typescript
import {
  Transaction,
  Client,
  PaymentMethod,
  PaymentGateway,
  Payout,
  SellerBankAccount,
  PayoutDetails,
  Item,
  Fees,
  StatusHistory,
  Company,
  Metadata,
  PaymentGatewayMethod,
  Booking,
  ProjectCompliance
} from 'oh-db-models';
```

### Importing from Feature-Specific Paths (recommended for clarity and tree-shaking)

*   **Shared Types:**
    ```typescript
    import { PaymentMethod, StatusHistory, Company, Metadata } from 'oh-db-models/shared';
    ```
*   **Payment Types:**
    ```typescript
    import { PaymentGatewayMethod, PaymentGateway, Fees } from 'oh-db-models/payments';
    ```
*   **Client Types:**
    ```typescript
    import { Client } from 'oh-db-models/clients';
    ```
*   **Transaction Types:**
    ```typescript
    import { Item, Transaction } from 'oh-db-models/transactions';
    ```
*   **Payout Types:**
    ```typescript
    import { SellerBankAccount, PayoutDetails, Payout } from 'oh-db-models/payouts';
    ```
*   **Booking Types:**
    ```typescript
    import { Booking, ProjectCompliance } from 'oh-db-models/bookings';
    ```

### Example Usage

```typescript
import { Transaction } from 'oh-db-models/transactions';
import { Payout } from 'oh-db-models/payouts';
import { Client } from 'oh-db-models/clients';
import { PaymentMethod } from 'oh-db-models/shared';

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
  paymentGateway: { // Assuming PaymentGateway is imported from 'oh-db-models/payments' if needed
    paymentId: 'gateway_payment_123',
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
  client: { // Assuming Client is imported from 'oh-db-models/clients'
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
  items: [ // Assuming Item is imported from 'oh-db-models/transactions'
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
  fees: { // Assuming Fees is imported from 'oh-db-models/payments'
    platformFee: 0,
    gatewayFee: 0,
    totalFee: 0,
    netAmount: 100000
  },
  status: 'PENDING',
  statusHistory: [ // Assuming StatusHistory is imported from 'oh-db-models/shared'
    {
      status: 'PENDING',
      timestamp: new Date(),
      reason: '',
      updatedBy: 'system'
    }
  ],
  company: { // Assuming Company is imported from 'oh-db-models/shared'
    id: 'company_789',
    name: 'Example Company',
    branch: '',
    department: '',
    salesPerson: ''
  },
  metadata: { // Assuming Metadata is imported from 'oh-db-models/shared'
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
  payoutDetails: { // Assuming PayoutDetails is imported from 'oh-db-models/payouts'
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
  sellerAccount: { // Assuming SellerBankAccount is imported from 'oh-db-models/payouts'
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
  statusHistory: [ // Assuming StatusHistory is imported from 'oh-db-models/shared'
    {
      status: 'REQUESTED',
      timestamp: new Date(),
      reason: 'Initiated by system',
      updatedBy: 'system'
    }
  ],
  company: { // Assuming Company is imported from 'oh-db-models/shared'
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

The data models are now organized into feature-based modules:

*   **Shared**: Contains common interfaces like `PaymentMethod`, `StatusHistory`, `Company`, and `Metadata` that are used across multiple domains.
*   **Payments**: Includes interfaces related to payment processing, such as `PaymentGatewayMethod`, `PaymentGateway`, and `Fees`.
*   **Clients**: Defines the `Client` interface for customer information.
*   **Transactions**: Contains `Item` and `Transaction` interfaces for managing transaction details.
*   **Payouts**: Includes interfaces for disbursing payments, such as `SellerBankAccount`, `PayoutDetails`, and `Payout`.
*   **Bookings**: Includes interfaces for booking management, such as `Booking` and `ProjectCompliance`.

## Development

To build the package:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT