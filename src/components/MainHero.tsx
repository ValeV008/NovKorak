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
      <h1 className="relative text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl xl:mt-10">
        <span className="relative inline-block text-gray-900">{mainHero.title}</span>
        <br />
        <span className={"block text-primary xl:inline"}>
          {mainHero.subtitle}
        </span>
      </h1>
      <div className="flex flex-col gap-4 mx-auto max-w-3xl text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <p className="text-base sm:text-lg md:text-xl sm:max-w-2xl">
          {mainHero.additionalText}
        </p>
        <ScrollLink
          spy={true}
          active="active"
          smooth={true}
          duration={1000}
          to={mainHero.secondaryAction.href.replace(/^#/, "")}
          className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg mx-auto cursor-pointer"
        >
          {mainHero.bookButton || "Rezerviraj termin"}
        </ScrollLink>
      </div>
      <div className="relative mx-auto w-full max-w-[720px] aspect-[3/2]">
        <Image
          alt="collage image"
          className="rounded-lg object-cover"
          src={collageImage}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
    </main>
  );
};

export default MainHero;
