import { StatusHistory, Company } from '../shared/types';
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