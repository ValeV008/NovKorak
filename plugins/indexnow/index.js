const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const getSitemapUrls = async () => {
  const { readFile } = await import("node:fs/promises");
  const { resolve } = await import("node:path");
  const sitemap = await readFile(resolve("public/sitemap.xml"), "utf8");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
};

module.exports = {
  onSuccess: async ({ inputs }) => {
    if (process.env.CONTEXT !== "production") {
      return;
    }

    const urlList = await getSitemapUrls();
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(inputs.siteUrl).host,
        key: inputs.key,
        keyLocation: `${inputs.siteUrl}/${inputs.key}.txt`,
        urlList,
      }),
    });

    if (!response.ok) {
      console.warn(`IndexNow submission failed with HTTP ${response.status}.`);
    }
  },
};