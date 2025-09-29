import React from "react";

import home_kolaz from "../../public/assets/images/home_kolaz.png";
import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import OtrociOdrasliSubpages from "../components/OtrociOdrasliSubpages";
import Pricing from "../components/Pricing";
import Product from "../components/Product";

const App = () => {
  return (
    <div className={`bg-background grid sm:gap-y-4 xl:gap-y-8`} id="home">
      <Header />
      <div className={`relative bg-background`}>
        <div className="max-w-full h-100">
          {/* <div
            className={`relative z-10 bg-background lg:max-w-[40%] lg:w-full lg:my-auto `}
          > */}
          <MainHero />
          {/* </div> */}
        </div>
        {/* <MainHeroImage /> */}
        <img src={home_kolaz.src} alt="Kolaz" className="w-full" />
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
