import React from "react";

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Canvas from "../components/Canvas";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHeroImageOdrasli from "../components/MainHeroImageOdrasli";
import MainHeroOdrasli from "../components/MainHeroOdrasli";
import SquaresOdrasli from "../components/SquaresOdrasli";

const OdrasliPage = () => {
  return (
    <div className={`bg-background grid gap-y-8 xl:gap-y-16`}>
      <Header />
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto lg:h-screen">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen`}
          >
            <MainHeroOdrasli />
          </div>
        </div>
        <MainHeroImageOdrasli />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <SquaresOdrasli />
        </>
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
