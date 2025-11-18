/**
 * Represents a Xendit-specific payment method.
 */
export interface XenditPaymentMethod {
    /** The type of payment method (e.g., 'EWALLET', 'BANK_TRANSFER'). */
    type: string;
    /** The specific channel code used by Xendit (e.g., 'ID_OVO', 'BCA'). */
    channel_code: string;
    /** Additional properties specific to the Xendit payment channel. */
    channel_properties: Record<string, any>;
}
/**
 * Represents a Xendit payment transaction.
 */
export interface Xendit {
    /** Unique identifier for the payment from Xendit. */
    paymentId: string;
    /** External ID provided by the merchant for the payment. */
    externalId: string;
    /** Current status of the Xendit payment. */
    status: string;
    /** Date and time when the payment was created in Xendit. */
    created: Date;
    /** Date and time when the payment was last updated in Xendit. */
    updated: Date;
    /** Details of the payment method used for the Xendit transaction. */
    paymentMethod: XenditPaymentMethod;
    /** Raw responses from Xendit API calls. */
    response: {
        /** Initial response from Xendit when the payment was created. */
        initial: Record<string, any>;
        /** Callback response from Xendit (e.g., webhook data). */
        callback: Record<string, any>;
        /** Error details if the payment failed. */
        error: any;
    };
    /** Indicates if a webhook notification has been received from Xendit. */
    webhookReceived: boolean;
    /** Timestamp of the last webhook received from Xendit. */
    webhookTimestamp: Date | null;
    /** URL for the Xendit checkout page. */
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
    /** Fee charged by Xendit. */
    xenditFee: number;
    /** Total sum of all fees. */
    totalFee: number;
    /** The amount remaining after all fees have been deducted. */
    netAmount: number;
}
//# sourceMappingURL=types.d.ts.map