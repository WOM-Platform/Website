export class StripeCheckoutRequest {
    productId: string;
    priceId: string;
    paymentMode: string;
    quantity: number;
    redirectUrlParameters: string;
}
export class StripeCheckoutResponse {
    url: string

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new StripeCheckoutResponse(), json);
    }
}

export class StripePrice {
    id: string;
    active: boolean;
    billingScheme: string;
    created: string;
    currency: string;
    productId: string;
    product: StripeProduct;
    recurring: StripePriceRecurring;
    taxBehavior: string;
    tiers: StripePriceTier;
    tiersMode: string;
    type: string;
    unitAmount: number;
    unitAmountDecimal: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new StripePrice(), json);
    }
}

export class StripeProduct {
    id: string;
    description: string;
    name: string;
    type: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new StripeProduct(), json);
    }
}

export class StripePriceRecurring {
    aggregateUsage: string;
    interval: string;
    intervalCount: number;
    trialPeriodDays: number;
    usageType: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new StripePriceRecurring(), json);
    }
}

export class StripePriceTier {
    id: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new StripePriceTier(), json);
    }
}
