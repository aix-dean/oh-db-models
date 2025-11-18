import { PaymentMethod } from '../shared/types';

/**
 * Represents a payment gateway-specific payment method.
 */
export interface PaymentGatewayMethod {
  /** The type of payment method (e.g., 'EWALLET', 'BANK_TRANSFER'). */
  type: string;
  /** The specific channel code used by the payment gateway (e.g., 'ID_OVO', 'BCA'). */
  channel_code: string;
  /** Additional properties specific to the payment gateway channel. */
  channel_properties: Record<string, any>;
}

/**
 * Represents a payment gateway transaction.
 */
export interface PaymentGateway {
  /** Unique identifier for the payment from the gateway. */
  paymentId: string;
  /** External ID provided by the merchant for the payment. */
  externalId: string;
  /** Current status of the payment. */
  status: string;
  /** Date and time when the payment was created. */
  created: Date;
  /** Date and time when the payment was last updated. */
  updated: Date;
  /** Details of the payment method used for the transaction. */
  paymentMethod: PaymentGatewayMethod;
  /** Raw responses from payment gateway API calls. */
  response: {
    /** Initial response when the payment was created. */
    initial: Record<string, any>;
    /** Callback response (e.g., webhook data). */
    callback: Record<string, any>;
    /** Error details if the payment failed. */
    error: any;
  };
  /** Indicates if a webhook notification has been received. */
  webhookReceived: boolean;
  /** Timestamp of the last webhook received. */
  webhookTimestamp: Date | null;
  /** URL for the checkout page. */
  checkoutUrl: string;
  /** QR code string for payments that support it. */
  qrCode: string;
  /** Virtual account number for bank transfer payments. */
  virtualAccountNumber: string;
}

/**
 * Represents various fees associated with a transaction.
 */
export interface Fees {
  /** Fee charged by the platform. */
  platformFee: number;
  /** Fee charged by the payment gateway. */
  gatewayFee: number;
  /** Total sum of all fees. */
  totalFee: number;
  /** The amount remaining after all fees have been deducted. */
  netAmount: number;
}