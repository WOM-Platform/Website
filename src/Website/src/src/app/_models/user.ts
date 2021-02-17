import {Merchant} from './merchant';

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
