import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");
  const footerPrefix = "shell.footer";

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <Link href="/" aria-label={t("shell.brandAlt")}>
            <Image className="site-footer__logo" src="/assets/rua-logo.png" alt="RUA delovna terapija" width={107} height={72} />
          </Link>
          <p className="site-footer__tagline">{t(`${footerPrefix}.tagline`)}</p>
        </div>
        <div>
          <h2 className="site-footer__heading">{t(`${footerPrefix}.servicesHeading`)}</h2>
          <nav className="site-footer__links" aria-label={t(`${footerPrefix}.servicesHeading`)}>
            <Link href="/otroci">{t("shell.navigation.0.name")}</Link>
            <Link href="/odrasli">{t("shell.navigation.1.name")}</Link>
          </nav>
        </div>
        <div>
          <h2 className="site-footer__heading">{t(`${footerPrefix}.linksHeading`)}</h2>
          <nav className="site-footer__links" aria-label={t(`${footerPrefix}.linksHeading`)}>
            <Link href="/cenik">{t("shell.navigation.2.name")}</Link>
            <Link href="/o-nas">{t("shell.navigation.3.name")}</Link>
          </nav>
        </div>
        <div>
          <h2 className="site-footer__heading">{t(`${footerPrefix}.contactHeading`)}</h2>
          <div className="site-footer__links">
            <Link href="/#kontakt">{t("shell.contact")}</Link>
            <a href={`mailto:${t(`${footerPrefix}.email`)}`}>{t(`${footerPrefix}.email`)}</a>
            <a href={`tel:${t(`${footerPrefix}.phone`).replace(/[^\d+]/g, "")}`}>{t(`${footerPrefix}.phone`)}</a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>{t(`${footerPrefix}.copyright`)}</span>
        <span>{t(`${footerPrefix}.serviceArea`)}</span>
      </div>
    </footer>
  );
};

export default Footer;
