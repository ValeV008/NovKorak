import React from "react";

import Canvas from "../components/Canvas";
import HeaderOdrasli from "../components/HeaderOdrasli";
import MainHeroImageOdrasli from "../components/MainHeroImageOdrasli";
import MainHeroOdrasli from "../components/MainHeroOdrasli";

const OdrasliPage = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto lg:h-screen">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen`}
          >
            <HeaderOdrasli />
            <MainHeroOdrasli />
          </div>
        </div>
        <MainHeroImageOdrasli />
      </div>
      <Canvas />
    </div>
  );
};

export default OdrasliPage;
