import React from "react";

import { useTranslation } from "next-i18next";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";



const MainHero = () => {
  const { t } = useTranslation("common");
  const mainHero = t("mainHero", { returnObjects: true }) as any;

  const company = t("company", { returnObjects: true }) as any;
  const { collageImage } = company;

  return (
    <main className="mx-6 my-6 sm:text-center grid gap-y-8">
      <h1 className="relative text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:mt-10">
        <span className="relative inline-block">{mainHero.title}</span>
        <br />
        <span className={"block text-primary xl:inline"}>
          {mainHero.subtitle}
        </span>
      </h1>
      <p className="text-base text-gray-700 sm:text-lg sm:mx-auto md:text-xl">
        {mainHero.additionalText}
      </p>
      <Image
        alt="collage image"
        className="w-auto align-middle mx-auto rounded-lg"
        src={collageImage}
        width={720}
        height={480}
      />
      <ScrollLink
        spy={true}
        active="active"
        smooth={true}
        duration={1000}
        to={mainHero.secondaryAction.href.replace(/^#/, "")}
        className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg mx-auto cursor-pointer"
      >
        {mainHero.ctaText}
      </ScrollLink>    
    </main>
  );
};

export default MainHero;
