import React from "react";

import { useTranslation } from "next-i18next";

const MainHero = () => {
  const { t, i18n } = useTranslation("common");
  const mainHero = t("mainHero", { returnObjects: true }) as any; // reuse base hero title
  const elderlyHero = t("elderlyHero", { returnObjects: true }) as any;
  const locale = i18n.language;
  const videoSrc =
    locale === "sl"
      ? "/assets/videos/OT_elderly_slo.mp4"
      : "/assets/videos/OT_elderly_eng.mp4";

  // Ref + effect ensure the <video> element reloads the new source when language changes
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (v) {
      // Pause current playback, reset and reload metadata for new source
      try {
        v.pause();
      } catch {
        // ignore
      }
      // Force the browser to pick up the changed <source src=...>
      v.load();
    }
  }, [videoSrc]);

  return (
    <main className=" mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-20">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={"block text-primary xl:inline"}>
            {elderlyHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {elderlyHero.description}
        </p>
        <div
          className="w-full max-w-3xl mx-auto my-8"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            controls
            aria-label={elderlyHero.videoAlt}
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            {elderlyHero.videoAlt ||
              "Your browser does not support the video tag."}
          </video>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
