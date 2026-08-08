import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";
type FooterVariant = "home" | "subpage";

interface FooterProps {
  variant: FooterVariant;
}

const Footer = ({ variant }: FooterProps) => {
  const { t } = useTranslation("common");
  const footerPrefix = "shell.footer";

  if (variant === "subpage") {
    return (
      <footer className="site-footer site-footer--subpage">
        <div className="site-footer__subpage-top">
          <Link href="/" aria-label={t("shell.brandAlt")}>
            <Image className="site-footer__logo" src="/assets/rua-logo.png" alt="" width={71} height={48} />
          </Link>
          <Link href="/" className="site-footer__home-link">{t(`${footerPrefix}.backHome`)}</Link>
        </div>
        <div className="site-footer__bottom">
          <span>{t(`${footerPrefix}.copyright`)}</span>
          <span>{t(`${footerPrefix}.serviceArea`)}</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <Link href="/" aria-label={t("shell.brandAlt")}>
            <Image className="site-footer__logo" src="/assets/rua-logo.png" alt="" width={107} height={72} />
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
            <span>{t(`${footerPrefix}.phone`)}</span>
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
