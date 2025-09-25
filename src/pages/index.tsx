import React from "react";

import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import OtrociOdrasliSubpages from "../components/OtrociOdrasliSubpages";
import Pricing from "../components/Pricing";
import Product from "../components/Product";

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16`}>
      <Header />
      <div className={`relative bg-background`}>
        <div className="max-w-full h-screen flex">
          <div
            className={`relative z-10 bg-background lg:max-w-[40%] lg:w-full lg:my-auto `}
          >
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <OtrociOdrasliSubpages />
      <Canvas />
      <LazyShow>
        <>
          <AboutMe />
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <ContactForm />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
