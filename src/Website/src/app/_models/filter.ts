import { Bounds } from "./bounds";

export interface Filter {
  aim: string;
  bounds: Bounds;
  maxAge: number;
}

export interface CombinedFilters {
  dateFilters?: DateFilter;
  merchantFilters?: MerchantFilter;
  sourceFilters?: InstrumentFilter;
}

export interface DateFilter {
  startDate: Date | null;
  endDate: Date | null;
}

export interface MerchantFilter {
  merchantIds: string[];
  merchantNames: string[];
}

export interface InstrumentFilter {
  sourceId: string[];
  sourceNames: string[];
  aimListFilter: string[];
}
