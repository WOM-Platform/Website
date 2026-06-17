import { Offer } from "./offer";

export class Pos {
  id: string = "";
  name: string = "";
  url: string = "";
  // privateKey: string;
  // publicKey: string;
  latitude: number = 0;
  longitude: number = 0;
  isActive: boolean = false;

  cover: ImageCover | null = null;
  offers: Offer[] | "" = "";

  public static fromJson(json: any): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new Pos(), json);
  }
}

export interface ImageCover {
  blurHash: string;
  fullSizeUrl: string;
}

export class PosRegistration {
  ownerMerchantId: string = "";
  name: string = "";
  latitude: number = 0;
  longitude: number = 0;
  url: string = "";

  public static fromJson(json: any): PosRegistration | null {
    if (json === null || json === undefined) {
      return null;
    }
    return Object.assign(new PosRegistration(), json);
  }
}

export class PosMapContainer {
  pos: PosMap[] = [];

  public static fromJson(json: any): PosMapContainer | null {
    if (json === null) {
      return null;
    }
    return Object.assign(new PosMapContainer(), json);
  }
}

export class PosMap {
  id: string = "";
  name: string = "";
  position?: LatLon;
  url: string = "";
}

export class LatLon {
  latitude: number = 0;
  longitude: number = 0;
}
