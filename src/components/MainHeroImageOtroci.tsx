import { useEffect, useRef } from "react";

import { useTranslation } from "next-i18next";

const MainHeroImageOtroci = () => {
  const { t } = useTranslation("common");
  const youngerHero = t("youngerHero", { returnObjects: true }) as any;
  const videoSrc = "/assets/videos/OT_children_slo.mp4";
  const posterSrc = "/assets/images/otroci/children_video_placeholder_slo.png";

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
      } catch {
        // Ignore pause errors (e.g., autoplay restrictions).
      }
      v.load();
    }
  }, [videoSrc]);

  return (
    <div className="sm:h-72 sm:h-96 md:h-full lg:h-auto lg:self-end w-full">
      <video
        ref={videoRef}
        className="w-full object-cover"
        controls
        aria-label={youngerHero.videoAlt}
        preload="metadata"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        {youngerHero.videoAlt || "Your browser does not support the video tag."}
      </video>
    </div>
  );
};

export default MainHeroImageOtroci;
