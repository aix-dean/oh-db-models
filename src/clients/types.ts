import { Metadata } from '../shared/types';

export interface Client {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  business: {
    name: string;
    taxId: string;
    type: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  metadata: {
    customerSince: Date | null;
    totalTransactions: number;
    lifetimeValue: number;
    segment: string;
  };
}