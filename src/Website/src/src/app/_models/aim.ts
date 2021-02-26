export class Aim {
    code: string;
    titles: Titles[];
    order: number;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new Aim(), json);
    }
}

export class Titles {
    en: string;
    it: string;

    public static fromJson(json): any {
        if (json === null) {
            return null;
        }
        return Object.assign(new Titles(), json);
    }
}
