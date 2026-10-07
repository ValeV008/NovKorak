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

const getStructuredData = (logo: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "RUA, delovna terapija",
      alternateName: "RUA terapija",
      url: `${SITE_URL}/`,
      logo,
      telephone: "+386 40 287 507",
      email: "ruaterapija@gmail.com",
      description:
        "Delovna terapija na domu za otroke, mladostnike in starejše v Ljubljani in okolici. Bobath koncept, senzorna integracija, nevro-mišični taping, Montessori, pomoč z umetnostjo.",
      areaServed: [
        { "@type": "City", name: "Ljubljana" },
        { "@type": "AdministrativeArea", name: "Osrednjeslovenska regija" },
      ],
      medicalSpecialty: "Occupational therapy",
      priceRange: "30 € – 390 €",
      currenciesAccepted: "EUR",
      availableLanguage: ["sl", "en"],
      founder: { "@id": `${SITE_URL}/#tina` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#tina`,
      name: "Tina Zadravec",
      jobTitle: "diplomirana delovna terapevtka, magistra umetnostne terapije",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/o-nas/`,
      memberOf: [
        { "@type": "Organization", name: "Zbornica delovnih terapevtov Slovenije" },
        { "@type": "Organization", name: "Slovensko združenje umetnostnih terapevtov" },
      ],
      knowsAbout: [
        "delovna terapija",
        "Bobath koncept",
        "senzorna integracija",
        "nevro-mišični taping",
        "umetnostna terapija",
        "demenca",
        "rehabilitacija po možganski kapi",
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Cenik storitev RUA",
      itemListElement: [
        { "@type": "Offer", name: "Prva obravnava na domu", price: "75", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Paket 6 obravnav", price: "390", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Posvet na daljavo (30 min)", price: "30", priceCurrency: "EUR" },
      ],
    },
  ],
});

const EMPTY_INITIAL_I18N_CONFIG: UserConfig = {
  i18n: {
    defaultLocale: AppConfig.locale,
    locales: ["sl", "en"],
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation("common");
  const logo = t("company.logoOrange");
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
        <script type="application/ld+json">{JSON.stringify(getStructuredData(`${SITE_URL}${logo}`))}</script>
      </Head>
      <NextTopLoader color="#f5ba01" showSpinner={false} />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp, EMPTY_INITIAL_I18N_CONFIG);
