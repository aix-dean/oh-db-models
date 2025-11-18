export interface PaymentMethod {
  type: string;
  channel: string;
  channelProperties: Record<string, any>;
}

export interface StatusHistory {
  status: string;
  timestamp: Date;
  reason: string;
  updatedBy: string;
}

export interface Company {
  id: string;
  name: string;
  branch: string;
  department: string;
  salesPerson: string;
}

export interface Metadata {
  source: string;
  ipAddress: string;
  userAgent: string;
  device: string;
  campaign: string;
  utmParameters: {
    source: string;
    medium: string;
    campaign: string;
    term: string;
    content: string;
  };
  customFields: Record<string, any>;
}