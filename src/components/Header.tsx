import React, { Fragment } from "react";

import { useTranslation } from "next-i18next";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

// import config from "../config/index.json"; // Replaced by i18n translations

const Menu = () => {
  const { t } = useTranslation("common");
  // Pull structured data from translation JSON (returnObjects preserves arrays/objects)
  // navigation should be an array in translation JSON. Guard in case namespace not loaded yet.
  const navigationRaw = t("navigation", { returnObjects: true });
  const navigation: Array<{ name: string; href: string }> = Array.isArray(
    navigationRaw
  )
    ? (navigationRaw as any)
    : [];

  const mainHero = t("mainHero", { returnObjects: true }) as any;
  const company = t("company", { returnObjects: true }) as any;
  const { name: companyName, logoOrange, logoWhite } = company;
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { locale, asPath } = router;

  const logoSrc = isHome ? logoOrange : logoWhite;

  return (
    <div
      id="header"
      className="sticky top-0 lg:sticky lg:top-0 lg:left-0 lg:right-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 pb-1">
          <nav
            className="relative flex items-center justify-between"
            aria-label="Global"
          >
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
            {/* Mobile hamburger button moved to the far right */}
            <div className="flex md:hidden items-center ml-auto">
              <PopoverButton
                className={"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-4 items-center w-full">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => {
                  // If config supplies absolute route like "/odrasli", link directly
                  if (item.href.startsWith("/")) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  return isHome ? (
                    <ScrollLink
                      spy={true}
                      active="active"
                      smooth={true}
                      duration={1000}
                      key={item.name}
                      to={item.href.replace(/^#/, "")}
                      className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${
                        item.href.startsWith("#") ? item.href : `#${item.href}`
                      }`
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
                    onClick={() =>
                      router.push(asPath, asPath, { locale: "sl" })
                    }
                    className={`text-sm font-semibold focus:outline-none mr-1 ${
                      locale === "sl"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-pressed={locale === "sl"}
                  >
                    SLO
                  </button>
                  <span className="text-gray-400">/</span>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(asPath, asPath, { locale: "en" })
                    }
                    className={`text-sm font-semibold focus:outline-none ml-1 ${
                      locale === "en"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-pressed={locale === "en"}
                  >
                    ENG
                  </button>
                </div>
                {isHome ? (
                  <ScrollLink
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    to={mainHero.secondaryAction.href.replace(/^#/, "")}
                    className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {locale === "sl" ? "Kontakt" : "Contact"}
                  </ScrollLink>
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
              className={"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden"}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={logoSrc}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <div className="-mr-2">
                  <PopoverButton
                    className={"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  if (item.href.startsWith("/")) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  return isHome ? (
                    <ScrollLink
                      spy={true}
                      active="active"
                      smooth={true}
                      duration={1000}
                      key={item.name}
                      to={item.href.replace(/^#/, "")}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${
                        item.href.startsWith("#") ? item.href : `#${item.href}`
                      }`
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
