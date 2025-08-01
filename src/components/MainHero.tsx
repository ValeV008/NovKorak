import React from "react";

import { useRouter } from "next/router";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const router = useRouter();
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-15">
      <div className="sm:text-center lg:text-left">
        <div className="mb-2 flex justify-center lg:justify-center">
          <button
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg"
            type="button"
            onClick={() => router.push("/odrasli")}
          >
            Kliknite za 10 min brezplačni posvet
          </button>
        </div>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <br />
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Kaj delovna terapija lahko ponudi vam?
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Delovna terapija omogoča ljudem vseh starosti, da so aktivno udeleženi
          v vsakodnevnem življenju.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <button
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer`}
              type="button"
            >
              {mainHero.primaryAction.text}
            </button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              onClick={() => router.push("/odrasli")}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer`}
              type="button"
            >
              {mainHero.secondaryAction.text}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
