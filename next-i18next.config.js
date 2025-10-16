module.exports = {
  i18n: {
    defaultLocale: "sl",
    locales: ["sl", "en"],
  },
  localeDetection: false, // Disable checking Accept-Language header
  reloadOnPrerender: process.env.NODE_ENV === "development",
  localesPath: "./public/locales",
};
