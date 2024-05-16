import { Aim } from "./aim";

export interface Instrument {
  id: string;
  url: string;
  name: string;
  aims: Aim[];
  access: Access[];
}

export interface Access {
  name: string;
  email: string;
}
