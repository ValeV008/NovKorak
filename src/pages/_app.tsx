import { appWithTranslation } from "next-i18next";
import NextTopLoader from "nextjs-toploader";

import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/main.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Nov Korak</title>
    </Head>
    <NextTopLoader color="#f2b70d" showSpinner={false} />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
