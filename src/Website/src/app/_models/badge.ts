import { Filter } from "./filter";
export interface ImageBadge {
  blurHash: string;
  fullSizeUrl: string;
  highDensityFullWidthUrl: string;
  midDensityFullWidthUrl: string;
  squareThumbnailUrl: string;
}
export interface Badge {
  id: string;
  challenge: string;
  isPublic: boolean;
  name: LocalizedText;
  filter: string;
  image: ImageBadge;
  description: LocalizedText;
  informationUrl?: string;
  creationTimestamp: string;
  updateTimestamp?: string;
}

interface LocalizedText {
  [locale: string]: string;
}
