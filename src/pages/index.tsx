import React from "react";

import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import Product from "../components/Product";

const App = () => {
  return (
    <div className={"bg-background grid sm:gap-y-4 xl:gap-y-8 mb-20"} id="home">
      <Header />
      <div className={"relative bg-background"}>
        <div className="max-w-full md:min-h-[60vh]">
          <MainHero />
        </div>
      </div>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <ContactForm />
      </LazyShow>
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
