import React from "react";

const MainHero = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-20">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl py-5">
          <span className="block xl:inline">Delovna terapija</span>{" "}
          <span className={`block text-primary xl:inline`}>za odrasle</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Delovna terapija je proces, ki vam pomaga ponovno pridobiti nadzor nad
          svojim življenjem po poškodbi ali bolezni. Naša ekipa strokovnjakov
          vam bo pomagala pri prilagajanju vsakodnevnih opravil in dejavnosti,
          da boste lahko živeli polno in neodvisno življenje.
        </p>
        <div
          className="w-full max-w-3xl mx-auto my-8"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Pq3IxTY_2nA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg min-h-[350px] h-[20vh]"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
