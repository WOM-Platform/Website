import { Injectable, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";

export interface SeoData {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  updateSeo(seo: SeoData): void {
    if (seo.title) {
      this.title.setTitle(seo.title);

      this.updateMeta("og:title", seo.title, "property");

      this.updateMeta("twitter:title", seo.title, "name");
    }

    if (seo.description) {
      this.updateMeta("description", seo.description, "name");

      this.updateMeta("og:description", seo.description, "property");

      this.updateMeta("twitter:description", seo.description, "name");
    }

    if (seo.image) {
      this.updateMeta("og:image", seo.image, "property");

      this.updateMeta("twitter:image", seo.image, "name");
    }

    this.updateMeta("og:type", seo.type ?? "website", "property");

    if (seo.canonical) {
      this.setCanonicalUrl(seo.canonical);
    }
  }

  private updateMeta(
    name: string,
    content: string,
    attribute: "name" | "property"
  ) {
    this.meta.updateTag({
      [attribute]: name,
      content,
    });
  }

  private setCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector(
      'link[rel="canonical"]'
    );

    if (!link) {
      link = this.document.createElement("link");

      link.setAttribute("rel", "canonical");

      this.document.head.appendChild(link);
    }

    link.setAttribute("href", url);
  }
}
