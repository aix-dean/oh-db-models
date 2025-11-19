import { Timestamp, GeoPoint } from 'firebase/firestore';
/**
 * Represents a product.
 */
export interface Product {
    id: string;
    name: string;
    price: number;
    site_code: string;
    categories: string[];
    active: boolean;
    deleted: boolean;
    media: any[];
    created: Timestamp;
    rating: number;
    seller_name: string;
    seller_id: string;
    status: string;
    playerSns: string[];
    playerIds: string[];
    description: string;
    company_id: string;
    content_type: string;
    position: number;
    cms: {
        end_time: string;
        start_time: string;
        loop_per_day: number;
        spot_duration: number;
    };
    specs_rental: {
        resolution: {
            width: number;
            height: number;
        };
        audience_type: string[];
        land_owner: string;
        orientation: string;
        facing_direction: string;
        geopoint: GeoPoint;
        location: string;
        location_label: string;
        location_visibility: number;
        location_visibolity_unit: string;
        partner: string;
        traffic_count: number;
        elevation: number;
        dimension_unit: string;
        width: number;
        height: number;
        illumination: {
            bottom_count: number;
            upper_count: number;
            left_count: number;
            right_count: number;
            bottom_lighting_specs: string;
            upper_lighting_specs: string;
            left_lighting_specs: string;
            right_lighting_specs: string;
        };
        structure: {
            color: string;
            condition: string;
            contractor: string;
            last_maintenance: Timestamp;
        };
    };
    retail_spot: {
        spot_number: number[];
    }[];
}
//# sourceMappingURL=types.d.ts.map