import React from "react";

// import { useRouter } from "next/router";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  // const router = useRouter();
  // const isHome = router.pathname === "/";

  return (
    <main className="mx-auto mt-10 lg:max-w-screen-md max-w-[80%] sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:mb-20">
      <div className="sm:text-center">
        <h1 className="relative text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:mt-10">
          <span className="relative inline-block">{mainHero.title}</span>
          <br />
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <br />
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          {mainHero.additionalText}
        </p>
        <button
          className="px-6 py-3 mt-7 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg"
          type="button"
        >
          Kliknite za 10 min brezplačni posvet
        </button>
      </div>
    </main>
  );
};

export default MainHero;
