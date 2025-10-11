import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

import config from "../config/index.json";

const Menu = () => {
  const { mainHero, navigation, company } = config;
  const { name: companyName, logoOrange, logoWhite } = company;
  const router = useRouter();
  const isHome = router.pathname === "/";

  const logoSrc = isHome ? logoOrange : logoWhite;

  return (
    <div
      id="header"
      className="sticky top-0 lg:sticky lg:top-0 lg:left-0 lg:right-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center md:space-x-6 w-full md:w-auto">
                <Link href="/" passHref>
                  <span className="sr-only">{companyName}</span>
                  <Image
                    alt="logo"
                    className="h-16 w-auto sm:h-16"
                    src={logoSrc}
                    width={64}
                    height={64}
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-4 items-center w-full">
              <div className="flex items-center space-x-8">
                {navigation.map((item) =>
                  isHome ? (
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
                  )
                )}
              </div>
              <div className="flex items-center ml-auto pl-8 border-l border-gray-200 whitespace-nowrap space-x-4">
                <div className="flex items-center">
                  <button className="text-sm font-semibold text-gray-700 hover:text-primary focus:outline-none mr-1">
                    SLO
                  </button>
                  <span className="text-gray-400">/</span>
                  <button className="text-sm font-semibold text-gray-700 hover:text-primary focus:outline-none ml-1">
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
                    className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Kontakt
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
                    Kontakt
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
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
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
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) =>
                  isHome ? (
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
                  )
                )}
              </div>
              {isHome ? (
                <ScrollLink
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  to={mainHero.secondaryAction.href.replace(/^#/, "")}
                  className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
                >
                  {mainHero.secondaryAction.text}
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
                  className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
                >
                  {mainHero.secondaryAction.text}
                </Link>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Menu;
