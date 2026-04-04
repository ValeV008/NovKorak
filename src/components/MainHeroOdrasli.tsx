import { useTranslation } from "next-i18next";

const MainHeroOdrasli = () => {
  const { t } = useTranslation("common");
  const elderlyHero = t("elderlyHero", { returnObjects: true }) as any;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 sm:mt-12 md:mt-16 lg:mt-0 xl:mt-0 lg:px-8 lg:h-full lg:flex lg:flex-col lg:justify-end">
      <div className="sm:text-center lg:text-left">
        <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 whitespace-pre-line leading-relaxed">
          {elderlyHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHeroOdrasli;
