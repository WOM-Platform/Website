/**
 * User data response
 */
export class User {
  email: string;
  name: string;
  surname: string;

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

/**
 * User registration data request
 */
export class UserRegistrationPayload {
  email: string;
  password: string;
  name: string;
  surname: string;
}

/*
export class User {
  name: string;
  surname: string;
  email: string;
  merchants: Merchant[];

  constructor(name: string = '', surname: string = '', email: string = '', merchants: Merchant[] = []) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.merchants = merchants;
  }

  public static fromJSON(jsonObj): any {
    if (jsonObj == null) {
      return null;
    }
    return Object.assign(new User(), jsonObj);
  }
}
*/
