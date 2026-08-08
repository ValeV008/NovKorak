import { useEffect } from "react";

import { appWithTranslation, useTranslation } from "next-i18next";
import NextTopLoader from "nextjs-toploader";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/main.css";
import { AppConfig } from "../utils/AppConfig";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    document.documentElement.lang = locale || AppConfig.locale;
  }, [locale]);

  return (
    <>
      <Head>
        <title>{t("shell.metaTitle")}</title>
      </Head>
      <NextTopLoader color="#f5ba01" showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
