export class Stats {
  totalVouchersGenerated: number;
  totalVouchersRedeemed: number;
  totalVouchersAvailable: number;
  totalVouchersSpent: number;
  aims: RootAims;

  public static fromJson(json): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new Stats(), json);
  }
}

export class RootAims {
  0: AimStats;
}

export class AimStats {
  generated: number;
  redeemed: number;
  available: number;
  spent: number;
}

export interface ChartDataSwimlane {
  name: string;
  value: number;
}

export interface VoucherByAimDTO {
  aimCode: string;
  aimName: string;
  amount: number;
}

export interface ChartDataSwimlaneSeries {
  name: string;
  series: ChartDataSwimlane[];
}

export interface TotalGeneratedRedeemedOverTime {
  date: string;
  totalRedeemed: number;
  totalGenerated: number;
}

export interface TotalConsumedOverTime {
  date: string;
  total: number;
}

export interface ElementRankDTO {
  id: string;
  name: string;

  rank: number;
}

export interface MerchantRankDTO extends ElementRankDTO {
  amount: number;
}

export interface SourceRankDTO extends ElementRankDTO {
  totalRedeemedAmount: number;
  totalGeneratedAmount: number;
}

export interface GenerationRedeemedStatsApiResponse {
  generatedInPeriod: number;
  totalGenerated: number;
  redeemedInPeriod: number;
  totalRedeemed: number;
  voucherByAim: VoucherByAimDTO[];
  voucherAvailable: number;
  totalGeneratedAndRedeemedOverTime: TotalGeneratedRedeemedOverTime[];
  sourceRank: SourceRankDTO[];
}

export interface ConsumedStatsApiResponse {
  consumedInPeriod: number;
  totalConsumed: number;
  transactionsInPeriod: number;
  totalTransactions: number;
  merchantRanks: MerchantRankDTO[];
  totalConsumedOverTime: TotalConsumedOverTime[];
}
