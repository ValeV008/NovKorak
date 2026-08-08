import { useCallback, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
interface NavigationItem {
  href: string;
  name: string;
}

const isNavigationItem = (value: unknown): value is NavigationItem => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;
  return typeof item.href === "string" && typeof item.name === "string";
};

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocaleLoading, setIsLocaleLoading] = useState(false);
  const translatedNavigation = t("shell.navigation", { returnObjects: true });
  const navigation = Array.isArray(translatedNavigation)
    ? translatedNavigation.filter(isNavigationItem)
    : [];
  const locale = router.locale === "en" ? "en" : "sl";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  const changeLocale = useCallback(
    async (nextLocale: "sl" | "en") => {
      if (isLocaleLoading || nextLocale === locale) {
        return;
      }

      setIsLocaleLoading(true);
      try {
        await router.push(router.asPath, router.asPath, { locale: nextLocale });
      } finally {
        setIsLocaleLoading(false);
      }
    },
    [isLocaleLoading, locale, router]
  );

  const isCurrentRoute = (href: string) => router.pathname === href;

  const localeSwitcher = (
    <div className="locale-switcher" aria-label={t("shell.languageLabel")}>
      <button
        type="button"
        className="locale-switcher__button"
        aria-pressed={locale === "sl"}
        disabled={isLocaleLoading}
        onClick={() => changeLocale("sl")}
      >
        {t("shell.localeSl")}
      </button>
      <button
        type="button"
        className="locale-switcher__button"
        aria-pressed={locale === "en"}
        disabled={isLocaleLoading}
        onClick={() => changeLocale("en")}
      >
        {t("shell.localeEn")}
      </button>
    </div>
  );

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label={t("shell.brandAlt")}>
          <Image className="site-header__logo" src="/assets/rua-logo.png" alt="" width={68} height={46} priority />
        </Link>
        <nav className="site-header__nav" aria-label={t("shell.navigationLabel")}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-header__link"
              aria-current={isCurrentRoute(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          {localeSwitcher}
          <Link className="rua-button" href="/#kontakt">{t("shell.contact")}</Link>
        </div>
        <button
          type="button"
          className="site-header__menu-button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t("shell.menuClose") : t("shell.menuOpen")}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{isMenuOpen ? "\u00d7" : "\u2630"}</span>
        </button>
      </div>
      <div id="mobile-navigation" className="site-header__mobile" data-open={isMenuOpen}>
        <nav className="site-header__mobile-nav" aria-label={t("shell.navigationLabel")}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-header__link"
              aria-current={isCurrentRoute(item.href) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="site-header__mobile-actions">
          {localeSwitcher}
          <Link className="rua-button" href="/#kontakt" onClick={() => setIsMenuOpen(false)}>
            {t("shell.contact")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
