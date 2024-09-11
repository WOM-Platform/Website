import {Bounds} from "./bounds";

export interface Filter {
    aim: string
    bounds: Bounds
    maxAge: number
}

export interface DashboardAdminFilter {
    startDate?: string;
    endDate?: string;
    merchantId?: string;
    sourceId?: string;
}