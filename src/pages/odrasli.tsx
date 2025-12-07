import React from "react";

import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHeroImageOdrasli from "../components/MainHeroImageOdrasli";
import MainHeroOdrasli from "../components/MainHeroOdrasli";
import OdrasliFor from "../components/OdrasliFor";

const OdrasliPage = () => {
  const { t } = useTranslation("common");
  const mainHero = t("mainHero", { returnObjects: true }) as any; // reuse base hero title
  const elderlyHero = t("elderlyHero", { returnObjects: true }) as any;

  return (
    <div className={"bg-background grid gap-y-8 xl:gap-y-16"}>
      <Header />
      <div className={"relative bg-background"}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mx-auto text-center">
            <span className="block xl:inline">{mainHero.title}</span>{" "}
            <span className={"block text-primary xl:inline"}>
              {elderlyHero.subtitle}
            </span>
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 w-full lg:w-1/2">
              <MainHeroOdrasli />
            </div>
            <div className="w-full lg:w-1/2 my-auto">
              <MainHeroImageOdrasli />
            </div>
          </div>
        </div>
      </div>
      {/* <Canvas /> */}
      <LazyShow>
        <>
          <OdrasliFor />
        </>
      </LazyShow>
      <LazyShow>
        <Features />
      </LazyShow>
    </div>
  );
};

export default OdrasliPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};
