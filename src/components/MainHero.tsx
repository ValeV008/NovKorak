import React from "react";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mt-10 ml-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-15">
      <div className="sm:text-center lg:text-left">
        <div className="mb-2 flex justify-center lg:justify-center">
          <button
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg"
            type="button"
          >
            Kliknite za 10 min brezplačni posvet
          </button>
        </div>
        <h1 className="relative text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:mt-10">
          <span className="relative inline-block">
            {mainHero.title}
            <span className="absolute lg:-top-1 lg:-right-13 text-xl text-gray-500 font-semibold whitespace-nowrap">
              {mainHero.titleUpper}
            </span>
          </span>
          <br />
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <br />
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.additionalText}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
