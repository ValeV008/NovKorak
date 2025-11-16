import React from "react";

import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

import gospaImg from "../../public/assets/images/gospa.png";
import punckaImg from "../../public/assets/images/puncka.jpg";

const OtrociOdrasliSubpages = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const mainHero = t("mainHero", { returnObjects: true }) as any; 

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Part */}
      <div
        className="flex-1 flex flex-col justify-between items-center bg-cover bg-center rounded-lg p-8 min-h-[350px]"
        style={{ backgroundImage: `url(${punckaImg.src})` }}
      >
        <div className="mb-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">{mainHero.primaryAction.text}</h2>
        </div>
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer"
          type="button"
        >
          {mainHero.primaryAction.cta_text}
        </button>
      </div>

      {/* Right Part */}
      <div
        className="flex-1 flex flex-col justify-between items-center bg-cover bg-center rounded-lg p-8 min-h-[350px]"
        style={{ backgroundImage: `url(${gospaImg.src})` }}
      >
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{mainHero.secondaryAction.text}</h2>
        </div>
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer"
          type="button"
          onClick={() => router.push("/odrasli")}
        >
          {mainHero.secondaryAction.cta_text}
        </button>
      </div>
    </div>
  );
};

export default OtrociOdrasliSubpages;
