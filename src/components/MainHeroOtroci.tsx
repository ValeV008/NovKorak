import React from "react";

import { useTranslation } from "next-i18next";

const MainHeroOtroci = () => {
  const { t } = useTranslation("common");
  const youngerHero = t("youngerHero", { returnObjects: true }) as any;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 sm:mt-12 md:mt-16 lg:mt-0 xl:mt-0 lg:px-8 lg:h-full lg:flex lg:flex-col lg:justify-end">
      <div className="sm:text-center lg:text-left">
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 whitespace-pre-line">
          {youngerHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHeroOtroci;
