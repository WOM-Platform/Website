export interface SeoPage {
  path: string;
  title: string;
  description: string;
  canonical: string;
  lang: "it";
  index: boolean;
  sitemap: boolean;

  image?: string;
  lastModified?: string;
}
