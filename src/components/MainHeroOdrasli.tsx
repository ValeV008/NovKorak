import React from "react";

import { useTranslation } from "next-i18next";

const MainHero = () => {
  const { t } = useTranslation("common");
  const elderlyHero = t("elderlyHero", { returnObjects: true }) as any;

  return (
    <main className=" mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-20">
      <div className="sm:text-center lg:text-justify">
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 whitespace-pre-line">
          {elderlyHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
