import React from "react";

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import OtrociOdrasliSubpages from "../components/OtrociOdrasliSubpages";
import Product from "../components/Product";

const App = () => {
  return (
    <div className={`bg-background grid sm:gap-y-4 xl:gap-y-8 mb-20`} id="home">
      <Header />
      <div className={`relative bg-background`}>
        <div className="max-w-full md:h-[60vh]">
          <MainHero />
        </div>
        {/* <img src={home_kolaz.src} alt="Kolaz" className="w-full" /> */}
      </div>
      <OtrociOdrasliSubpages />
      <Canvas />
      <LazyShow>
        <>
          {/* <AboutMe /> */}
          <Product />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow> */}
      {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <ContactForm />
      </LazyShow>
      {/* <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow> */}
      <Analytics />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};

export default App;
