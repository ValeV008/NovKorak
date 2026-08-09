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

interface ChildrenPageCopy {
  title: string;
  titleAccent: string;
  intro: string[];
  videoAlt: string;
  videoFallback: string;
  videoPlay: string;
  videoPause: string;
  checklistTitle: string;
  checklistAccent: string;
  checklistSuffix: string;
  checklist: ChecklistItem[];
  followUp: string[];
  approachesTitle: string;
  approaches: Approach[];
}

const ChildrenPage = () => {
  const { i18n, t } = useTranslation("common");
  const page = t("childrenPage", { returnObjects: true }) as unknown as ChildrenPageCopy;
  const isEnglish = i18n.language === "en";
  const videoSource = isEnglish ? "/assets/videos/OT_children_eng.mp4" : "/assets/videos/OT_children_slo.mp4";
  const videoPoster = isEnglish
    ? "/assets/images/otroci/children_video_placeholder_eng.png"
    : "/assets/images/otroci/children_video_placeholder_slo.png";

  return (
    <main className="children-page">
      <section className="children-page__intro" aria-labelledby="children-page-title">
        <h1 id="children-page-title">
          {page.title} <span>{page.titleAccent}</span>
        </h1>
        <div className="children-page__intro-grid">
          <div className="children-page__intro-copy">
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

      <section className="children-page__checklist-section" aria-labelledby="children-checklist-title">
        <div className="children-page__checklist">
          <h2 id="children-checklist-title">
            {page.checklistTitle} <span>{page.checklistAccent}</span> {page.checklistSuffix}
          </h2>
          <GoldRule centered />
          <ul>
            {page.checklist.map((item) => (
              <li key={`${item.pre}${item.bold}`}>
                <span className="children-page__check" aria-hidden="true">✓</span>
                <span>{item.pre}{item.bold && <strong>{item.bold}</strong>}{item.post}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="children-page__follow-up" aria-label={page.title}>
        {page.followUp.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="children-page__approaches" aria-labelledby="children-approaches-title">
        <h2 id="children-approaches-title">{page.approachesTitle}</h2>
        <div className="children-page__approaches-grid">
          {page.approaches.map((approach) => (
            <article key={approach.title} className="children-page__approach">
              <span className="children-page__approach-icon">
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

export default ChildrenPage;
