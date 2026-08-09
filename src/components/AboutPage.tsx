import { useTranslation } from "next-i18next";

import Image from "next/image";

import { ABOUT_EDUCATION } from "../content/aboutEducation";

interface AboutPageCopy {
  kicker: string;
  title: string;
  portraitAlt: string;
  paragraphOnePrefix: string;
  paragraphOneSuffix: string;
  paragraphs: string[];
  educationTitle: string;
}

const AboutPage = () => {
  const { t } = useTranslation("common");
  const page = t("aboutPage", { returnObjects: true }) as unknown as AboutPageCopy;

  return (
    <main className="about-page">
      <section className="about-page__intro" aria-labelledby="about-page-title">
        <div className="about-page__portrait">
          <Image
            src="/assets/images/aboutMe.png"
            alt={page.portraitAlt}
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 40px), 530px"
          />
        </div>

        <div className="about-page__copy">
          <header className="about-page__heading">
            <p>{page.kicker}</p>
            <h1 id="about-page-title">{page.title}</h1>
            <div className="about-page__rule" aria-hidden="true" />
          </header>

          <div className="about-page__paragraphs">
            <p>
              {page.paragraphOnePrefix}
              <strong>RUA</strong>
              {page.paragraphOneSuffix}
            </p>
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__education" aria-labelledby="about-page-education-title">
        <h2 id="about-page-education-title">{page.educationTitle}</h2>
        <div className="about-page__education-rule" aria-hidden="true" />
        <ul>
          {ABOUT_EDUCATION.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;
