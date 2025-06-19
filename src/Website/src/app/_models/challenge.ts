import { Badge } from "./badge";

export interface Challenge {
  id: string;
  isPublic: boolean;
  name: LocalizedText;
  description: LocalizedText;
  informationUrl: string;
  badges: Badge[];
}

interface LocalizedText {
  [locale: string]: string;
}
