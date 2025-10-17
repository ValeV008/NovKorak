import React from "react";

import Image from "next/image";
import { Link } from "react-scroll";

import logo from "../../public/assets/images/logo.png";
import config from "../config/index.json";

const About = () => {
  const { navigation, company, about, mainHero } = config;
  const { name: companyName } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={logo} alt={companyName} width={64} height={64} />
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {navigation.map((item) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={item.name}
              to={item.href}
              className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <Link
            spy={true}
            active="active"
            smooth={true}
            duration={1000}
            to={mainHero.secondaryAction.href}
            className={"font-medium text-primary hover:text-secondary cursor-pointer"}
          >
            Kontakt
          </Link>
        </div>
        <div className="flex items-center gap-x-8 mt-10 sm:mt-6 h-8">
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} RUA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
