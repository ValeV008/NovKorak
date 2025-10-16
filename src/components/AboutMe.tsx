import React from "react";

import Image from "next/image";

import Divider from "./Divider";
import aboutMePic from "../../public/assets/images/aboutMe.png";
import config from "../config/index.json";

const { aboutMe } = config;

const AboutMe = () => {
  return (
    <main className="max-w-5xl mx-auto" id="aboutMe">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-10">
        <div className="w-full sm:w-1/2 my-6">
          <Image
            src={aboutMePic}
            alt="My picture"
            className="rounded-lg shadow-lg object-cover w-full h-auto sm:mx-0 mx-auto"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:text-right">
          <h1 className="my-2 text-5xl tracking-tight font-bold text-gray-800 text-center lg:text-right">
            {aboutMe.title}
            <br />
            <span className={` text-primary`}>{aboutMe.highlighted_title}</span>
          </h1>
          <Divider />
          <p className="px-6 text-gray-600">
            V okviru delovne terapije delujemo na področju [re]habilitacije oseb
            z nevrološkimi, mišično-skeletnimi težavami in izzivi na področju
            duševnega zdravja. Cenimo znanje in modrosti, zato pri svojem delu
            premišljeno vpeljujemo nove pristope in terapevtske pripomočke.
            Povezujemo se tudi s strokovnjaki iz tujine [Anglije in Kanade].
            ____ je vpisan v register zasebnih zdravstvenih delavcev pri
            Ministrstvu za zdravje in ima uradno dovoljenje za izvajanje
            storitev delovne terapije. Smo aktivni člani Zbornice delovnih
            terapevtov Slovenije in Slovenskega združenja umetnostnih
            terapevtov. Pod mislijo/sloganom ____ sem Tina Zadravec, magistra
            umetnostne terapije ter diplomirana delovna terapevtka. Z
            deseletnimi izkušnjami v delu povezujem različna znanja s šolanja in
            dodatnih izobraževanj z namenom, da posameznik prejme individualni
            pristop in obravnavo. Izobraževala sem se n
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
