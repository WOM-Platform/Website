import {Pos} from './pos';

export class Merchant {
  id: string;
  name: string;
  primaryActivity: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  description: string;
  websiteUrl: string;
}

export class Merchants {
  email: string;
  merchants: MerchantContainer[];
}

export class MerchantContainer {
  id: MerchantId;
  name: string;
  fiscalCode: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  url: string;
  pos: Pos[];
}

export class MerchantId {
  timestamp: number;
  machine: number;
  pid: number;
  increment: number;
  creationTime: Date;
}
