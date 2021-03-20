export class Pos {
  id: string;
  name: string;
  url: string;
  privateKey: string;
  publicKey: string;
  latitude: number;
  longitude: number;

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
