import React from "react";

import { useTranslation } from "next-i18next";

const MainHeroImageOdrasli = () => {
  const { i18n, t } = useTranslation("common");
  const locale = i18n.language;
  const elderlyHero = t("elderlyHero", { returnObjects: true }) as any;
  const videoSrc =
    locale === "sl"
      ? "/assets/videos/OT_elderly_slo.mp4"
      : "/assets/videos/OT_elderly_eng.mp4";

  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
      } catch {
        // ignore
      }
      v.load();
    }
  }, [videoSrc]);

  return (
    <div className="h-72 sm:h-96 md:h-full">
      <video
        ref={videoRef}
        className="w-full object-cover"
        controls
        aria-label={elderlyHero.videoAlt}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        {elderlyHero.videoAlt || "Your browser does not support the video tag."}
      </video>
    </div>
  );
};

export default MainHeroImageOdrasli;
