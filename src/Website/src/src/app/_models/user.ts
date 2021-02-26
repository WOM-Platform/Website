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

  constructor(id: string = '', token: string = '') {
    this.id = id;
    this.token = token;
  }

  public static fromJson(json): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new UserLogin(), json);
  }
}
