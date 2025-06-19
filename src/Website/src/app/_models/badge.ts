export interface ImageBadge {
  blurHash: string;
  fullSizeUrl: string;
  highDensityFullWidthUrl: string;
  midDensityFullWidthUrl: string;
  squareThumbnailUrl: string;
}

export interface Badge {
  id: string;
  sortName: string;
  challengeId: string;
  isPublic: boolean;
  name: LocalizedText;
  description: LocalizedText;
  simpleFilter: SimpleFilter;
  image: ImageBadge;
  informationUrl?: string;
  creationTimestamp: string;
  updateTimestamp?: string;
}

interface LocalizedText {
  [locale: string]: string;
}

export interface SimpleFilter {
  count: number;
  sourceId: string;
  aim: string;
  bounds: {
    leftTop: number[];
    rightBottom: number[];
  };
  interval: {
    start: string;
    end: string;
  };
}
