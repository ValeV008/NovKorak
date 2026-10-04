import { useEffect } from "react";

import { appWithTranslation, useTranslation } from "next-i18next";
import { UserConfig } from "next-i18next";
import NextTopLoader from "nextjs-toploader";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/main.css";
import { AppConfig } from "../utils/AppConfig";

const SITE_URL = "https://ruaterapija.si";

const EMPTY_INITIAL_I18N_CONFIG: UserConfig = {
  i18n: {
    defaultLocale: AppConfig.locale,
    locales: ["sl", "en"],
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation("common");
  const slUrl = `${SITE_URL}${pathname === "/" ? "/" : `${pathname}/`}`;
  const enUrl = `${SITE_URL}/en${pathname === "/" ? "/" : `${pathname}/`}`;
  const canonicalUrl = locale === "en" ? enUrl : slUrl;
  const metaKey =
    pathname === "/otroci"
      ? "children"
      : pathname === "/odrasli"
        ? "olderAdults"
        : pathname === "/cenik"
          ? "pricing"
          : pathname === "/o-nas"
            ? "about"
            : "home";

  useEffect(() => {
    document.documentElement.lang = locale || AppConfig.locale;
  }, [locale]);

  return (
    <>
      <Head>
        <title>{t(`shell.meta.${metaKey}.title`)}</title>
        <meta name="description" content={t(`shell.meta.${metaKey}.description`)} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="sl" href={slUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="x-default" href={slUrl} />
      </Head>
      <NextTopLoader color="#f5ba01" showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp, EMPTY_INITIAL_I18N_CONFIG);
