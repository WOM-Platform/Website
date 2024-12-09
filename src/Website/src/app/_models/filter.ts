import { Bounds } from "./bounds";

export interface Filter {
  aim: string;
  bounds: Bounds;
  maxAge: number;
}

export interface DashboardAdminFilter {
  startDate?: string;
  endDate?: string;
  merchantId?: string;
  merchantName?: string;
  sourceId?: string;
  sourceName?: string;
  aimListFilter?: string[];
}
