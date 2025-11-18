/**
 * Represents a generic payment method.
 */
export interface PaymentMethod {
    /** The type of payment method (e.g., 'EWALLET', 'BANK_TRANSFER'). */
    type: string;
    /** The specific channel used for the payment (e.g., 'OVO', 'BCA'). */
    channel: string;
    /** Additional properties specific to the payment channel. */
    channelProperties: Record<string, any>;
}
/**
 * Records the history of status changes for a transaction or payout.
 */
export interface StatusHistory {
    /** The status value (e.g., 'PENDING', 'COMPLETED', 'FAILED'). */
    status: string;
    /** The timestamp when the status change occurred. */
    timestamp: Date;
    /** The reason for the status change. */
    reason: string;
    /** The entity or user who updated the status. */
    updatedBy: string;
}
/**
 * Represents company details.
 */
export interface Company {
    /** Unique identifier for the company. */
    id: string;
    /** Name of the company. */
    name: string;
    /** Branch of the company. */
    branch: string;
    /** Department within the company. */
    department: string;
    /** Name of the sales person associated with the company. */
    salesPerson: string;
}
/**
 * Contains general metadata for tracking and analytics.
 */
export interface Metadata {
    /** The source of the transaction or event (e.g., 'web', 'mobile'). */
    source: string;
    /** The IP address from which the action originated. */
    ipAddress: string;
    /** The user agent string of the client device. */
    userAgent: string;
    /** The type of device used (e.g., 'desktop', 'mobile'). */
    device: string;
    /** The marketing campaign associated with the action. */
    campaign: string;
    /** UTM parameters for tracking marketing campaigns. */
    utmParameters: {
        /** The source of the campaign (e.g., 'google', 'facebook'). */
        source: string;
        /** The medium of the campaign (e.g., 'cpc', 'social'). */
        medium: string;
        /** The name of the campaign. */
        campaign: string;
        /** Keywords for the campaign. */
        term: string;
        /** Content of the campaign. */
        content: string;
    };
    /** Custom fields for additional metadata. */
    customFields: Record<string, any>;
}
//# sourceMappingURL=types.d.ts.map