export interface Challenge {
  id: string;
  isPublic: boolean;
  name: LocalizedText;
  description: LocalizedText;
  informationUrl: string;
}

interface LocalizedText {
  [locale: string]: string;
}
