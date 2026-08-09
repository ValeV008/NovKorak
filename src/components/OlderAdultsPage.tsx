import { useTranslation } from "next-i18next";

import Image from "next/image";

import GoldRule from "./GoldRule";
import VideoPlayer from "./VideoPlayer";

interface ChecklistItem {
  pre: string;
  bold: string;
  post: string;
}

interface Approach {
  title: string;
  text: string;
  icon: string;
  iconAlt: string;
}

interface OlderAdultsPageCopy {
  title: string;
  titleAccent: string;
  intro: string[];
  videoAlt: string;
  videoFallback: string;
  videoPlay: string;
  videoPause: string;
  checklistTitle: string;
  checklist: ChecklistItem[];
  followUp: string[];
  approachesTitle: string;
  approaches: Approach[];
}

const OlderAdultsPage = () => {
  const { i18n, t } = useTranslation("common");
  const page = t("olderAdultsPage", { returnObjects: true }) as unknown as OlderAdultsPageCopy;
  const isEnglish = i18n.language === "en";
  const videoSource = isEnglish ? "/assets/videos/OT_elderly_eng.mp4" : "/assets/videos/OT_elderly_slo.mp4";
  const videoPoster = isEnglish
    ? "/assets/images/odrasli/OT_elderly_eng_poster.png"
    : "/assets/images/odrasli/OT_elderly_poster.png";

  return (
    <main className="older-adults-page">
      <section className="older-adults-page__intro" aria-labelledby="older-adults-page-title">
        <h1 id="older-adults-page-title">
          {page.title} <span>{page.titleAccent}</span>
        </h1>
        <div className="older-adults-page__intro-grid">
          <div className="older-adults-page__intro-copy">
            {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <VideoPlayer
            source={videoSource}
            poster={videoPoster}
            videoLabel={page.videoAlt}
            fallbackText={page.videoFallback}
            playLabel={page.videoPlay}
            pauseLabel={page.videoPause}
          />
        </div>
      </section>

      <section className="older-adults-page__checklist-section" aria-labelledby="older-adults-checklist-title">
        <div className="older-adults-page__checklist">
          <h2 id="older-adults-checklist-title">{page.checklistTitle}</h2>
          <GoldRule centered />
          <ul>
            {page.checklist.map((item) => (
              <li key={`${item.pre}${item.bold}`}>
                <span className="older-adults-page__check" aria-hidden="true">✓</span>
                <span>{item.pre}{item.bold && <strong>{item.bold}</strong>}{item.post}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="older-adults-page__follow-up" aria-label={page.title}>
        {page.followUp.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="older-adults-page__approaches" aria-labelledby="older-adults-approaches-title">
        <h2 id="older-adults-approaches-title">{page.approachesTitle}</h2>
        <div className="older-adults-page__approaches-grid">
          {page.approaches.map((approach) => (
            <article key={approach.title} className="older-adults-page__approach">
              <span className="older-adults-page__approach-icon">
                <Image src={approach.icon} alt={approach.iconAlt} width={32} height={32} />
              </span>
              <div>
                <h3>{approach.title}</h3>
                <p>{approach.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OlderAdultsPage;
