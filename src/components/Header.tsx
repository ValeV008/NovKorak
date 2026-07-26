import { Fragment, useCallback, useState } from "react";

import { useTranslation } from "next-i18next";
import { useTopLoader } from "nextjs-toploader";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const { t } = useTranslation("common");
  const navigationRaw = t("navigation", { returnObjects: true });
  const navigation: Array<{ name: string; href: string }> = Array.isArray(navigationRaw)
    ? (navigationRaw as any)
    : [];

  const mainHero = t("mainHero", { returnObjects: true }) as any;
  const company = t("company", { returnObjects: true }) as any;
  const { name: companyName, logoOrange, logoOrangeSubtext } = company;
  const router = useRouter();
  const topLoader = useTopLoader();
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);
  const isHome = router.pathname === "/";
  const { locale, asPath } = router;
  const isCurrentRoute = (href: string) => router.pathname === href;

  const logoSrc = logoOrangeSubtext || logoOrange;

  const handleLanguageChange = useCallback(
    async (nextLocale: "sl" | "en") => {
      if (isLanguageLoading || locale === nextLocale) {
        return;
      }

      setIsLanguageLoading(true);
      topLoader.start();

      try {
        await router.push(asPath, asPath, { locale: nextLocale });
      } finally {
        topLoader.done(true);
        setIsLanguageLoading(false);
      }
    },
    [asPath, isLanguageLoading, locale, router, topLoader]
  );

  return (
    <div
      id="header"
      className="sticky top-0 lg:sticky lg:top-0 lg:left-0 lg:right-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 pb-1">
          <nav className="relative flex items-center justify-between" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center md:space-x-6 w-full md:w-auto">
                <Link href="/" passHref>
                  <span className="sr-only">{companyName}</span>
                  <Image
                    alt="logo"
                    className="h-16 lg:h-16 w-auto"
                    src={logoSrc}
                    width={128}
                    height={128}
                  />
                </Link>
              </div>
            </div>
            <div className="flex md:hidden items-center ml-auto space-x-3">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("sl")}
                  disabled={isLanguageLoading}
                  className={`text-sm font-semibold cursor-pointer focus:outline-none mr-1 disabled:opacity-60 disabled:cursor-not-allowed ${
                    locale === "sl" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                  aria-pressed={locale === "sl"}
                  aria-busy={isLanguageLoading}
                >
                  SLO
                </button>
                <span className="text-gray-400">/</span>
                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  disabled={isLanguageLoading}
                  className={`text-sm font-semibold cursor-pointer focus:outline-none ml-1 disabled:opacity-60 disabled:cursor-not-allowed ${
                    locale === "en" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                  aria-pressed={locale === "en"}
                  aria-busy={isLanguageLoading}
                >
                  ENG
                </button>
                {isLanguageLoading && (
                  <span
                    className="ml-2 inline-block h-3 w-3 rounded-full border-2 border-gray-300 border-t-primary animate-spin"
                    aria-hidden="true"
                  />
                )}
              </div>
              <PopoverButton
                className={
                  "bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                }
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-4 items-center w-full">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => {
                  if (item.href.startsWith("/")) {
                    const isCurrent = isCurrentRoute(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`font-medium cursor-pointer ${
                          isCurrent ? "text-primary" : "text-gray-500 hover:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  return isHome ? (
                    <a
                      key={item.name}
                      href={`#${item.href.replace(/^#/, "")}`}
                      className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${item.href.startsWith("#") ? item.href : `#${item.href}`}`
                        .replace("//#", "/#")
                        .replace("//", "/")}
                      className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center ml-auto pl-8 border-l border-gray-200 whitespace-nowrap space-x-6">
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("sl")}
                    disabled={isLanguageLoading}
                    className={`text-sm font-semibold cursor-pointer focus:outline-none mr-1 disabled:opacity-60 disabled:cursor-not-allowed ${
                      locale === "sl" ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                    aria-pressed={locale === "sl"}
                    aria-busy={isLanguageLoading}
                  >
                    SLO
                  </button>
                  <span className="text-gray-400">/</span>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    disabled={isLanguageLoading}
                    className={`text-sm font-semibold cursor-pointer focus:outline-none ml-1 disabled:opacity-60 disabled:cursor-not-allowed ${
                      locale === "en" ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                    aria-pressed={locale === "en"}
                    aria-busy={isLanguageLoading}
                  >
                    ENG
                  </button>
                  {isLanguageLoading && (
                    <span
                      className="ml-2 inline-block h-3 w-3 rounded-full border-2 border-gray-300 border-t-primary animate-spin"
                      aria-hidden="true"
                    />
                  )}
                </div>
                {isHome ? (
                  <a
                    href={`#${mainHero.secondaryAction.href.replace(/^#/, "")}`}
                    className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {locale === "sl" ? "Kontakt" : "Contact"}
                  </a>
                ) : (
                  <Link
                    href={`/${
                      mainHero.secondaryAction.href.startsWith("#")
                        ? mainHero.secondaryAction.href
                        : `#${mainHero.secondaryAction.href}`
                    }`
                      .replace("//#", "/#")
                      .replace("//", "/")}
                    className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {locale === "sl" ? "Kontakt" : "Contact"}
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="fixed z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={
                "rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden"
              }
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image className="h-8 w-auto" src={logoSrc} alt="" width={32} height={32} />
                </div>
                <div className="-mr-2">
                  <PopoverButton
                    className={
                      "bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                    }
                  >
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  if (item.href.startsWith("/")) {
                    const isCurrent = isCurrentRoute(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          isCurrent
                            ? "text-primary bg-gray-50"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  return isHome ? (
                    <a
                      key={item.name}
                      href={`#${item.href.replace(/^#/, "")}`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${item.href.startsWith("#") ? item.href : `#${item.href}`}`
                        .replace("//#", "/#")
                        .replace("//", "/")}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Menu;
