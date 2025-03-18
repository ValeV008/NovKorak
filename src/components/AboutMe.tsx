import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const { aboutMe } = config;

const AboutMe = () => {
  return (
    <main className="max-w-5xl mx-auto" id="aboutMe">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-10">
        <div className="w-full sm:w-1/2 my-6">
          <img
            className="rounded-lg shadow-lg object-cover w-full h-auto sm:mx-0 mx-auto"
            src={aboutMe.img}
            alt="My picture"
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
            Sem delovna terapevtka z večletnimi izkušnjami na področju dela z
            otroki in mladostniki. Sem tudi mama dveh otrok Tiana in Vide, ki so
            mi v veliko veselje in ponos. V prostem času rada preživljam čas v
            naravi, kjer z Aro čofotam po mlakužah. (created with AI)
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
