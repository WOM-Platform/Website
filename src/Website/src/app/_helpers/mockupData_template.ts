import {Merchant, Pos, User} from '../_models';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockupUser {
  merchantWithPos(): User {

    const pos1 = new Pos();
    pos1.id = 'id';
    pos1.name = 'name';
    pos1.privateKey = 'private-key';
    pos1.publicKey = 'public-key';

    const merchant = new Merchant();
    merchant.address = 'address';
    merchant.id = 'id';
    merchant.name = 'name';
    merchant.zipCode = 'zip';
    merchant.city = 'city';

    const user = new User();
    user.name = 'name';
    user.surname = 'surname';
    user.email = 'email';

    return user;
  }
}
