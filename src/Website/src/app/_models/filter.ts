import { Bounds } from "./bounds";

export interface Filter {
  aim: string;
  bounds: Bounds;
  maxAge: number;
}

export interface DashboardAdminFilter {
  startDate?: Date;
  endDate?: Date;
  merchantId?: string[];
  merchantNames?: string[];
  sourceId?: string[];
  sourceNames?: string[];
  aimListFilter?: string[];
}
