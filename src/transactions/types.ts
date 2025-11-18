import { PaymentMethod, StatusHistory, Company, Metadata } from '../shared/types';
import { Xendit, Fees } from '../payments/types';
import { Client } from '../clients/types';

/**
 * Represents an item within a transaction.
 */
export interface Item {
  /** Unique identifier for the item. */
  id: string;
  /** Name of the item. */
  name: string;
  /** Description of the item. */
  description: string;
  /** Quantity of the item. */
  quantity: number;
  /** Price per unit of the item. */
  price: number;
  /** Total price for this item (quantity * price). */
  total: number;
  /** Category of the item (e.g., 'service', 'product'). */
  category: string;
  /** Additional metadata for the item. */
  metadata: Record<string, any>;
}

/**
 * Represents a comprehensive payment transaction.
 */
export interface Transaction {
  /** Unique identifier for the transaction. */
  id: string;
  /** ID of the user initiating the transaction. */
  userId: string;
  /** ID of the company associated with the transaction. */
  companyId: string;
  /** Date and time when the transaction was created. */
  createdAt: Date;
  /** Date and time when the transaction was last updated. */
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
  /** Xendit-specific payment details. */
  xendit: Xendit;
  /** Client information for the transaction. */
  client: Client;
  /** List of items included in the transaction. */
  items: Item[];
  /** Details of fees applied to the transaction. */
  fees: Fees;
  /** Current status of the transaction. */
  status: string;
  /** History of status changes for the transaction. */
  statusHistory: StatusHistory[];
  /** Company details associated with the transaction. */
  company: Company;
  /** General metadata for the transaction. */
  metadata: Metadata;
}