import { Bounds } from "./bounds";

export interface Filter {
  aim: string;
  bounds: Bounds;
  maxAge: number;
}

export interface CombinedFilters {
  dateFilters: DateFilter;
  merchantFilters: MerchantFilter;
  sourceFilters: GenerationFilter;
}

export interface DateFilter {
  startDate?: Date;
  endDate?: Date;
}

export interface MerchantFilter {
  merchantIds: string[];
  merchantNames: string[];
}

export interface GenerationFilter {
  sourceId: string[];
  sourceNames: string[];
  aimListFilter: string[];
}
