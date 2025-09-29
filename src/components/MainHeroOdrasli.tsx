import React from "react";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-20">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block text-primary xl:inline`}>
            za odrasle starejše
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          V polnosti izkusimo življenje skozi stvari, ki jih vsak dan radi
          počnemo – v vrtcu ali šoli, pri delu, v domačem okolju ali v
          skupnostih. Delovna terapija je zdravstvena stroka, ki vam ali vašemu
          družinskemu članu pomaga razviti spretnosti, potrebne za vsakodnevne
          dejavnosti, kadar so te sposobnosti zmanjšane ali izgubljene zaradi
          poškodbe, (kronične) bolezni, težav z duševnim zdravjem, razvojnega
          zaostanka, učnih težav, posledic staranja ali drugih zdravstvenih
          dejavnikov.
        </p>
        <div
          className="w-full max-w-3xl mx-auto my-8"
          style={{ aspectRatio: "16/9" }}
        >
          <video className="w-full h-full rounded-lg shadow-lg" controls>
            <source src="/assets/videos/OT_elderly_slo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
