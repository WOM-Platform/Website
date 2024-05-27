import { Aim } from "./aim";

export interface Instrument {
  id: string;
  url: string;
  name: string;
  aims: Aim[];
  access: Access[];
}

export interface Access {
  userId: string;
  name: string;
  surname: string;
  email: string;
  role: string;
}

export interface UIInstrument extends Instrument {
  isOpen: boolean;
}
