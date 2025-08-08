export interface BrandState {
    brands: Brand[];
    httpResult: { action: string; error?: unknown };
}

export interface Brand {
    id: string;
    name: string;
}

