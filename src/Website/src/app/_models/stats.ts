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

export interface TotalCreatedAmountByAim {
  aimCode: string;
  amount: number;
}

export interface MerchantRankDTO {
  id: string;
  name: string;
  amount: number;
  rank: number;
}

export interface RankMerchants {
  id: string;
  name: string;
  amount: number;
  rank: number;
}

export interface GenerationRedeemedStatsApiResponse {
  totalGenerated: number;
  totalRedeemed: number;
  voucherByAim: VoucherByAimDTO[];
  voucherAvailable: number;
  totalGeneratedAndRedeemedOverTime: TotalGeneratedRedeemedOverTime[];
}

export interface ConsumedStatsApiResponse {
  totalConsumed: number;
  merchantRanks: MerchantRankDTO[];
  totalConsumedOverTime: TotalConsumedOverTime[];
}
