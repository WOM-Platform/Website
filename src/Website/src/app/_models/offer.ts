import {Filter} from "./filter";

export interface Offer {
    id: string;
    title: string;
    cost: number;
    deactivated: boolean;
    filters: Filter[];
    imageBlob: Blob;
    imageString: string
}