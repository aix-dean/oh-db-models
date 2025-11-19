import { PaymentMethod, StatusHistory, Company, Metadata } from '../shared/types';
import { PaymentGateway, Fees } from '../payments/types';
import { Client } from '../clients/types';

/**
 * Represents a comprehensive payment transaction.
 */
export interface Transaction {
  updatedAt: Date;
  /** Total amount of the transaction. */
  amount: number;
  /** Currency of the transaction (e.g., 'IDR', 'USD'). */
  currency: string;
  /** Description of the transaction. */
  description: string;
  /** Name of the merchant involved in the transaction. */
  merchantName: string;
  /** Details of the payment method used. */
  paymentMethod: PaymentMethod;
  /** Payment gateway-specific payment details. */
  paymentGateway: PaymentGateway;
  /** Client information for the transaction. */
  fees: Fees;
  /** Current status of the transaction. */
  status: string;
  /** History of status changes for the transaction. */
  statusHistory: StatusHistory[];
  /** General metadata for the transaction. */
  metadata: Metadata;
}