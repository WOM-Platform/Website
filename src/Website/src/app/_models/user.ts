import {Merchant, Merchants} from "./merchant";
import {Instrument} from "./instrument";

/**
 * User registration data request
 */
export class UserRegistrationPayload {
    email: string;
    password: string;
    name: string;
    surname: string;
    role: string;
}

export interface UserMe {
    email: string;
    id: string;
    merchants: Merchant[];
    name: string;
    surname: string;
    role: string;
    sources: Instrument[];
    verified: boolean;
}

enum Roles {
    Admin,
    User,
}

/**
 * User data response
 */
export class User extends UserRegistrationPayload {
    id: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new User(), json);
    }
}

/**
 * User Login data response
 */
export class UserLogin {
    id: string;
    token: string;
    verified: boolean;

    constructor(id: string = "", token: string = "", verified: boolean = false) {
        this.id = id;
        this.token = token;
        this.verified = verified;
    }

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new UserLogin(), json);
    }
}
