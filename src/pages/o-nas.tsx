import React from "react";

import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import aboutMePic from "../../public/assets/images/aboutMe.png";
import Divider from "../components/Divider";
import Header from "../components/Header";
import config from "../config/index.json";

const { aboutMe } = config;

const ONasPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-background">
      <Header />
      <main className="max-w-5xl mx-auto py-8" id="aboutMe">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-10">
          <div className="w-full sm:w-1/2 my-6">
            <Image
              src={aboutMePic}
              alt="My picture"
              className="rounded-lg shadow-lg object-cover w-full h-auto sm:mx-0 mx-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:text-justify">
            <h1 className="my-2 text-5xl tracking-tight font-bold text-gray-800 text-center lg:text-right">
              {aboutMe.title}
              <br />
              <span className={" text-primary"}>{aboutMe.highlighted_title}</span>
            </h1>
            <Divider />
            <p className="px-6 text-gray-600 whitespace-pre-line">
              {t("aboutMePage.paragraph")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ONasPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};
