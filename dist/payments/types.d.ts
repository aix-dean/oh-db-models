export interface XenditPaymentMethod {
    type: string;
    channel_code: string;
    channel_properties: Record<string, any>;
}
export interface Xendit {
    paymentId: string;
    externalId: string;
    status: string;
    created: Date;
    updated: Date;
    paymentMethod: XenditPaymentMethod;
    response: {
        initial: Record<string, any>;
        callback: Record<string, any>;
        error: any;
    };
    webhookReceived: boolean;
    webhookTimestamp: Date | null;
    checkoutUrl: string;
    qrCode: string;
    virtualAccountNumber: string;
}
export interface Fees {
    platformFee: number;
    xenditFee: number;
    totalFee: number;
    netAmount: number;
}
//# sourceMappingURL=types.d.ts.map