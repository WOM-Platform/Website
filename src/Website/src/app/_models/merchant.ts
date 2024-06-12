import {Pos} from './pos';
import {Access} from "./instrument";

export class Merchant {
    id: string;
    name: string;
    fiscalCode: string;
    primaryActivity: string;
    address: string;
    addressDetails: AddressDetails;
    pos: Pos[];
    access: string;
    accessList: Access[];
    zipCode: string;
    city: string;
    country: string;
    description: string;
    url: string;
    enabled: boolean;


    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new Merchant(), json);
    }
}

export interface UIMerchant extends Merchant {
    isOpen: boolean
}

export class AddressDetails {
    formattedAddress: string;
}

export class MerchantContainer extends Merchant {
    pos: Pos[];

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new MerchantContainer(), json);
    }
}

export class Merchants {
    name: string;
    surname: string;
    email: string;
    merchants: MerchantContainer[];

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new Merchants(), json);
    }
}


