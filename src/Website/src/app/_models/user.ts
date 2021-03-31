/**
 * User registration data request
 */
export class UserRegistrationPayload {
  email: string;
  password: string;
  name: string;
  surname: string;
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

  constructor(id: string = '', token: string = '', verified: boolean = false) {
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
