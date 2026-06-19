export class Aim {
  code: string = "";
  titles?: Titles;
  hidden: boolean = false;

  public static fromJson(json: any): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new Aim(), json);
  }
}

export interface AimWithChecked extends Aim {
  isChecked: boolean;
}

export class AimEditing {
  enabled: string[] = [];
  enableAll: boolean = false;
}

export class Titles {
  en: string = "";
  it: string = "";

  public static fromJson(json: any): any {
    if (json === null) {
      return null;
    }
    return Object.assign(new Titles(), json);
  }
}
