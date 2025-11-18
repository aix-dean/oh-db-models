import { Timestamp } from 'firebase/firestore';

/**
 * Represents project compliance details.
 */
export interface ProjectCompliance {
  // Define fields as needed
  [key: string]: any;
}

/**
 * Represents a booking.
 */
export interface Booking {
  id: string;
  cancel_reason?: string;
  category_id?: string;
  client: {
    company_id: string;
    id: string;
    name: string;
    company_name: string;
  };
  company_id: string;
  contract?: string;
  cost: number;
  costDetails: {
    basePrice: number;
    days: number;
    discount: number;
    months: number;
    otherFees: number;
    pricePerMonth: number;
    total: number;
    vatAmount: number;
    vatRate: number;
  };
  tax?: {
    percentage: number;
    taxAmount: number;
  };
  discount?: {
    percentage?: number;
    amount?: number;
    discountTotal: number;
  };
  created: any; // Firestore timestamp
  end_date: Timestamp | null;
  media_order?: string[];
  payment_method: string;
  product_id: string;
  product_name?: string;
  product_owner: string;
  project_name?: string;
  promos?: {
    quotation_id: string;
    rated: boolean;
  };
  projectCompliance?: ProjectCompliance;
  requirements?: {
    description: string;
    fileName: string;
    fileUrl: string;
    required: boolean;
    title: string;
    type: string;
    uploadStatus: string;
  }[];
  reservation_id: string;
  seller_id: string;
  spot_numbers?: number[];
  start_date: Timestamp | null;
  status: string;
  total_cost: number;
  type: string;
  updated: any; // Firestore timestamp
  user_id: string;
  quotation_id: string;
  quotation_number?: string;
  isCollectibles?: boolean;
  items?: any;
  url?: string;
  for_screening?: number;
  airing_code?: string;
}