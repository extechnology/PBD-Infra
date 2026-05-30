export interface WeOfferCategory {
    id: string;
    title: string;
    image: string;
    description: string;
    is_active: boolean;
}

export interface WeOfferDetail {
    id: string;
    heading: string;
    description: string;
    image: string;
    category: WeOfferCategory;
    points: string[];
    assurance: string[];
    is_active: boolean;
}