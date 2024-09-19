import {Aim, AimEditing} from "./aim";

export class Instrument {
    id: string;
    url: string;
    name: string;
    aims: Aim[];
    access: Access[];
}

export interface UIInstrument extends Instrument {
    isOpen: boolean;
}

export interface InstrumentEditing {
    id: string;
    url: string;
    name: string;
    aims: AimEditing;
    access: Access[];
}

export interface Access {
    userId: string;
    name: string;
    surname: string;
    email: string;
    role: string;
}


