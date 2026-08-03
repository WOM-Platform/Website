import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { SEO_PAGES } from "src/app/seo/seo.config";

const sitemap = new SitemapStream({
  hostname: "https://wom.social",
});

SEO_PAGES.filter((page) => page.sitemap).forEach((page) => {
  sitemap.write({
    url: page.path,
    changefreq: "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  });
});

sitemap.end();

sitemap.pipe(createWriteStream("./dist/src/browser/sitemap.xml"));
