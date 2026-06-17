export class Stats {
  totalVouchersGenerated: number = 0;
  totalVouchersRedeemed: number = 0;
  totalVouchersAvailable: number = 0;
  totalVouchersSpent: number = 0;
  aims?: RootAims;

  public static fromJson(json: any): any {
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
  generated: number = 0;
  redeemed: number = 0;
  available: number = 0;
  spent: number = 0;
}

export interface VoucherByAimDTO {
  aimCode: string;
  aimName: string;
  amount: number;
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
