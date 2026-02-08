import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHeroImageOtroci from "../components/MainHeroImageOtroci";
import MainHeroOtroci from "../components/MainHeroOtroci";
import OtrociFor from "../components/OtrociFor";

const OtrociPage = () => {
  const { t } = useTranslation("common");
  const mainHero = t("mainHero", { returnObjects: true }) as any;
  const youngerHero = t("youngerHero", { returnObjects: true }) as any;

  return (
    <div className={"bg-background grid gap-y-8 xl:gap-y-16"}>
      <Header />
      <div className={"relative bg-background"}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mx-auto text-center">
            <span className="block xl:inline text-gray-900">{mainHero.title}</span>{" "}
            <span className={"block text-primary xl:inline"}>
              {youngerHero.subtitle}
            </span>
          </h1>
          <div className="pt-10 flex flex-col lg:flex-row lg:items-stretch">
            <div className="relative z-10 bg-background w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-end">
              <MainHeroOtroci />
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-end">
              <MainHeroImageOtroci />
            </div>
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <OtrociFor />
        </>
      </LazyShow>
      <LazyShow>
        <Features translationKey="featuresOtroci" />
      </LazyShow>
    </div>
  );
};

export default OtrociPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};
