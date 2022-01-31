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

export  class AimStats {
    generated: number;
    redeemed: number;
    available: number;
    spent: number;
}
