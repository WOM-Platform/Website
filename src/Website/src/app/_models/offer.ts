import { Filter } from "./filter";

export interface Offer {
  id: string;
  title: string;
  description: string;
  cost: number;
  deactivated: boolean;
  filter: Filter[];
  imageBlob: Blob;
  imageString: string;
  lastUpdate?: Date;
  lastPaymentConfirmation?: Date;
  payment: Payment;
}

export interface PosWithOffers {
  id: number;
  name: string;
  description: string;
  url: string;
  position: {
    latitude: number;
    longitude: number;
  };
  offers: {
    id: number;
    title: string;
    description: string;
    cost: number;
  }[];
}

export interface Payment {
  cost: number;
}
