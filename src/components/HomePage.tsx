import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import ContactForm from "./ContactForm";
import GoldRule from "./GoldRule";

interface HomeMethod {
  no: string;
  title: string;
  text: string;
}

interface HomeCopy {
  heroTitle: string;
  heroKicker: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  heroImageAlt: string;
  introTitle: string;
  introText: string;
  children: {
    kicker: string;
    title: string;
    lead: string;
    listTitle: string;
    items: string[];
    cta: string;
    imageAlt: string;
  };
  adults: {
    kicker: string;
    title: string;
    lead: string;
    listTitle: string;
    items: string[];
    cta: string;
    imageAlt: string;
  };
  approaches: {
    title: string;
    lead: string;
    items: HomeMethod[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
  };
}

const HomePage = () => {
  const { t } = useTranslation("common");
  const home = t("home", { returnObjects: true }) as unknown as HomeCopy;

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__blob" aria-hidden="true" />
        <div className="home-hero__content">
          <h1 id="home-title" className="home-hero__title">
            {home.heroTitle} <span>{home.heroKicker}</span>
          </h1>
          <p className="home-hero__lead">{home.heroText}</p>
          <div className="home-hero__actions">
            <Link className="rua-button rua-button--large" href="#kontakt">
              {home.heroPrimary}
            </Link>
            <a className="home-text-link" href="#otroci">
              {home.heroSecondary}
            </a>
          </div>
        </div>
        <div className="home-hero__media floaty">
          <Image src="/assets/hero-main.png" alt={home.heroImageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-title">
        <h2 id="home-intro-title">{home.introTitle}</h2>
        <GoldRule centered />
        <p>{home.introText}</p>
      </section>

      <section id="otroci" className="home-audience home-audience--children" aria-labelledby="children-title">
        <div className="home-audience__inner">
          <div className="home-audience__visual">
            <div className="home-audience__circle home-audience__circle--gold" aria-hidden="true" />
            <div className="home-audience__image">
              <Image src="/assets/images/puncka.jpg" alt={home.children.imageAlt} fill sizes="(max-width: 900px) 90vw, 400px" />
            </div>
            <Link className="rua-button" href="/otroci">{home.children.cta}</Link>
          </div>
          <div className="home-audience__copy">
            <span className="home-kicker">{home.children.kicker}</span>
            <h2 id="children-title">{home.children.title}</h2>
            <p className="home-audience__lead">{home.children.lead}</p>
            <h3>{home.children.listTitle}</h3>
            <Checklist items={home.children.items} />
          </div>
        </div>
      </section>

      <div className="home-spacer" aria-hidden="true" />

      <section id="odrasli" className="home-audience home-audience--adults" aria-labelledby="adults-title">
        <div className="home-audience__inner">
          <div className="home-audience__copy">
            <span className="home-kicker">{home.adults.kicker}</span>
            <h2 id="adults-title">{home.adults.title}</h2>
            <p className="home-audience__lead">{home.adults.lead}</p>
            <h3>{home.adults.listTitle}</h3>
            <Checklist items={home.adults.items} />
          </div>
          <div className="home-audience__visual">
            <div className="home-audience__circle home-audience__circle--mint" aria-hidden="true" />
            <div className="home-audience__image">
              <Image src="/assets/images/gospa.png" alt={home.adults.imageAlt} fill sizes="(max-width: 900px) 90vw, 400px" />
            </div>
            <Link className="rua-button" href="/odrasli">{home.adults.cta}</Link>
          </div>
        </div>
      </section>

      <section id="pristopi" className="home-approaches" aria-labelledby="approaches-title">
        <div className="home-section-heading">
          <h2 id="approaches-title">{home.approaches.title}</h2>
          <GoldRule centered />
          <p>{home.approaches.lead}</p>
        </div>
        <div className="home-approaches__grid">
          {home.approaches.items.map((method) => (
            <article key={method.no} className="home-approach-card">
              <span className="home-approach-card__number">{method.no}</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="home-contact" aria-labelledby="contact-title">
        <div className="home-contact__details">
          <h2 id="contact-title">{home.contact.title}</h2>
          <p>{home.contact.lead}</p>
          <address className="home-contact__rows">
            <a href="mailto:ruaterapija@gmail.com" className="home-contact__row">
              <span className="home-contact__icon home-contact__icon--email" aria-hidden="true">@</span>
              <span><span className="sr-only">{home.contact.emailLabel}: </span>ruaterapija@gmail.com</span>
            </a>
            <a href="tel:+38640287507" className="home-contact__row">
              <span className="home-contact__icon home-contact__icon--phone" aria-hidden="true">T</span>
              <span><span className="sr-only">{home.contact.phoneLabel}: </span>+386 40 287 507</span>
            </a>
            <p className="home-contact__row">
              <span className="home-contact__icon home-contact__icon--location" aria-hidden="true">⌖</span>
              <span><span className="sr-only">{home.contact.locationLabel}: </span>Ljubljana in okolica</span>
            </p>
          </address>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};

interface ChecklistProps {
  items: string[];
}

const Checklist = ({ items }: ChecklistProps) => (
  <ul className="home-checklist">
    {items.map((item) => (
      <li key={item}>
        <span aria-hidden="true">✓</span>
        {item}
      </li>
    ))}
  </ul>
);

export default HomePage;
