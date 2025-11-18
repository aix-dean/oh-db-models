import { StatusHistory, Company } from '../shared/types';
/**
 * Represents a seller's bank account for receiving payouts.
 */
export interface SellerBankAccount {
    /** Name of the bank. */
    bankName: string;
    /** Name of the account holder. */
    accountName: string;
    /** Bank account number. */
    accountNumber: string;
    /** Currency of the bank account. */
    currency: string;
    /** Indicates if this is the primary account for the seller. */
    isPrimary: boolean;
    /** Additional metadata for the bank account. */
    metadata: Record<string, any>;
}
/**
 * Details of a payout transaction.
 */
export interface PayoutDetails {
    /** Unique identifier for the payout from the payout service. */
    payoutId: string;
    /** External ID provided by the merchant for the payout. */
    externalId: string;
    /** Current status of the payout. */
    status: string;
    /** Amount of the payout. */
    amount: number;
    /** Currency of the payout. */
    currency: string;
    /** Fee deducted from the payout. */
    fee: number;
    /** Net amount received after fee deduction. */
    netAmount: number;
    /** Description of the payout. */
    description: string;
    /** Internal reference ID for the payout. */
    referenceId: string;
    /** Payment method used for the payout. */
    paymentMethod: {
        /** Type of payment method (e.g., 'BANK_TRANSFER'). */
        type: string;
        /** Specific channel used (e.g., 'BCA', 'MANDIRI'). */
        channel: string;
    };
    /** Raw responses from the payout service API. */
    response: {
        /** Initial response from the payout service. */
        initial: Record<string, any>;
        /** Callback response from the payout service. */
        callback: Record<string, any>;
        /** Error details if the payout failed. */
        error: any;
    };
}
/**
 * Represents a payout to a seller.
 */
export interface Payout {
    /** Unique identifier for the payout. */
    id: string;
    /** ID of the company receiving the payout. */
    companyId: string;
    /** ID of the user managing the payout. */
    userId: string;
    /** Date and time when the payout was created. */
    createdAt: Date;
    /** Date and time when the payout was last updated. */
    updatedAt: Date;
    /** Date when the payout is scheduled to be processed. */
    scheduledDate: Date;
    /** Date when the payout was actually processed. */
    processedDate: Date | null;
    /** Total amount of the payout before fees. */
    totalAmount: number;
    /** Detailed information about the payout transaction. */
    payoutDetails: PayoutDetails;
    /** Seller's bank account information. */
    sellerAccount: SellerBankAccount;
    /** List of source transactions that contributed to this payout. */
    sourceTransactions: {
        /** ID of the source transaction. */
        transactionId: string;
        /** Amount from this transaction. */
        amount: number;
        /** Fee associated with this transaction. */
        fee: number;
    }[];
    /** History of status changes for the payout. */
    statusHistory: StatusHistory[];
    /** Company details associated with the payout. */
    company: Company;
    /** Additional metadata for the payout. */
    metadata: {
        /** Type of payout (e.g., 'WEEKLY_PAYOUT', 'ADJUSTMENT'). */
        type: string;
        /** Batch ID if the payout is part of a batch. */
        batchId: string | null;
        /** Custom fields for additional metadata. */
        customFields: Record<string, any>;
    };
}
//# sourceMappingURL=types.d.ts.map