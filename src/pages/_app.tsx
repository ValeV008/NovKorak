import { useEffect } from "react";

import { appWithTranslation, useTranslation } from "next-i18next";
import { UserConfig } from "next-i18next";
import NextTopLoader from "nextjs-toploader";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/main.css";
import { AppConfig } from "../utils/AppConfig";

const EMPTY_INITIAL_I18N_CONFIG: UserConfig = {
  i18n: {
    defaultLocale: AppConfig.locale,
    locales: ["sl", "en"],
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation("common");
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
      </Head>
      <NextTopLoader color="#f5ba01" showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp, EMPTY_INITIAL_I18N_CONFIG);
