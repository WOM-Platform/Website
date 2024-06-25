import {Filter} from "./filter";

export interface Offer {
    id: string;
    title: string;
    description: string;
    cost: number;
    deactivated: boolean;
    filter: Filter[];
    imageBlob: Blob;
    imageString: string
}