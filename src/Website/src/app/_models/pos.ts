export class Pos {
  id: string;
  name: string;
  url: string;
  // privateKey: string;
  // publicKey: string;
  latitude: number;
  longitude: number;
  isActive: boolean;

  public static fromJson(json): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new Pos(), json);
  }
}

export class PosRegistration {
  ownerMerchantId: string;
  name: string;
  latitude: number;
  longitude: number;
  url: string;

  public static fromJson(json): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new PosRegistration(), json);
  }
}

export class PosMapContainer {
  pos: PosMap[];

  public static fromJson(json): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new PosMapContainer(), json);
  }
}

export class PosMap {
  id: string;
  name: string;
  position: LatLon;
  url: string;
}

export class LatLon {
  latitude: number;
  longitude: number;
}
