import { Metadata } from '../shared/types';

/**
 * Represents a client or customer.
 */
export interface Client {
  /** Unique identifier for the client. */
  id: string;
  /** Type of client (e.g., 'individual', 'business'). */
  type: string;
  /** Full name of the client. */
  name: string;
  /** Email address of the client. */
  email: string;
  /** Phone number of the client. */
  phone: string;
  /** Business details if the client is a business. */
  business: {
    /** Name of the business. */
    name: string;
    /** Tax identification number of the business. */
    taxId: string;
    /** Type of business (e.g., 'sole_proprietorship', 'corporation'). */
    type: string;
  };
  /** Primary address of the client. */
  address: {
    /** Street address. */
    street: string;
    /** City. */
    city: string;
    /** State or province. */
    state: string;
    /** Postal code. */
    postalCode: string;
    /** Country. */
    country: string;
  };
  /** Details of the primary contact person for the client. */
  contactPerson: {
    /** Name of the contact person. */
    name: string;
    /** Position or title of the contact person. */
    position: string;
    /** Email of the contact person. */
    email: string;
    /** Phone number of the contact person. */
    phone: string;
  };
  /** Billing address of the client. */
  billingAddress: {
    /** Street address for billing. */
    street: string;
    /** City for billing. */
    city: string;
    /** State or province for billing. */
    state: string;
    /** Postal code for billing. */
    postalCode: string;
    /** Country for billing. */
    country: string;
  };
  /** Additional metadata about the client. */
  metadata: {
    /** Date when the customer became a client. */
    customerSince: Date | null;
    /** Total number of transactions made by the client. */
    totalTransactions: number;
    /** Lifetime value of the client. */
    lifetimeValue: number;
    /** Customer segment (e.g., 'VIP', 'new'). */
    segment: string;
  };
}