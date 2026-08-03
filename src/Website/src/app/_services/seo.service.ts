import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Meta } from "@angular/platform-browser";
import { SEO_PAGES } from "../seo/seo.config";
import { SeoPage } from "../seo/seo.model";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateSeo(path: string) {
    const seoPage = SEO_PAGES.find((page) => page.path === path);

    if (!seoPage) {
      return;
    }

    this.title.setTitle(seoPage.title);

    this.meta.updateTag({
      name: "description",
      content: seoPage.description,
    });

    this.meta.updateTag({
      property: "og:title",
      content: seoPage.title,
    });

    this.meta.updateTag({
      property: "og:description",
      content: seoPage.description,
    });

    this.meta.updateTag({
      property: "og:image",
      content: seoPage.image ?? "",
    });

    this.updateCanonical(seoPage.canonical);
  }

  private updateCanonical(url: string) {
    let canonical = document.querySelector("link[rel='canonical']");

    if (!canonical) {
      canonical = document.createElement("link");

      canonical.setAttribute("rel", "canonical");

      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);
  }
}
