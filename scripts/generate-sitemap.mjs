import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://ruaterapija.si";
const OUTPUT_PATH = resolve("public/sitemap.xml");

const routes = [
  { path: "/", sources: ["src/pages/index.tsx", "src/components/HomePage.tsx"] },
  { path: "/otroci", sources: ["src/pages/otroci.tsx", "src/components/ChildrenPage.tsx"] },
  { path: "/odrasli", sources: ["src/pages/odrasli.tsx", "src/components/OlderAdultsPage.tsx"] },
  { path: "/cenik", sources: ["src/pages/cenik.tsx", "src/components/PricingPage.tsx"] },
  { path: "/o-nas", sources: ["src/pages/o-nas.tsx", "src/components/AboutPage.tsx"] },
];

const sharedSources = [
  "src/pages/_app.tsx",
  "src/components/SiteShell.tsx",
  "public/locales/sl/common.json",
  "public/locales/en/common.json",
];

const getLastModifiedDate = (sources) => {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", ...sources], {
      encoding: "utf8",
    }).trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
};

const createUrlEntry = (path, lastModified) => {
  const routePath = path === "/" ? "/" : `${path}/`;
  const slUrl = `${SITE_URL}${routePath}`;
  const enUrl = `${SITE_URL}/en${routePath}`;

  return `  <url>\n    <loc>${slUrl}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <xhtml:link rel="alternate" hreflang="sl" href="${slUrl}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${slUrl}" />\n  </url>\n  <url>\n    <loc>${enUrl}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <xhtml:link rel="alternate" hreflang="sl" href="${slUrl}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${slUrl}" />\n  </url>`;
};

const entries = routes.map(({ path, sources }) =>
  createUrlEntry(path, getLastModifiedDate([...sources, ...sharedSources])),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;

writeFileSync(OUTPUT_PATH, sitemap);