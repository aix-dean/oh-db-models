import { PaymentMethod, StatusHistory, Company, Metadata } from '../shared/types';
import { Xendit, Fees } from '../payments/types';
import { Client } from '../clients/types';
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
//# sourceMappingURL=types.d.ts.map