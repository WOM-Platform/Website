import { Filter } from "./filter";

export interface Badge {
  id: string;
  challenge: string;
  isPublic: boolean;
  name: LocalizedText;
  filter: string;
  imageUrl: string;
  description: LocalizedText;
  infoUrl?: string;
  creationTimestamp: string;
  updateTimestamp?: string;
}

interface LocalizedText {
  [locale: string]: string;
}
