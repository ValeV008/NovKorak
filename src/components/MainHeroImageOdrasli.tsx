import React from "react";

import Image from "next/image";

import mainHeroImg from "../../public/assets/images/grandma.png";

const MainHeroImageOdrasli = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative h-72 sm:h-96 md:h-full">
      <Image
        className="h-56 w-full object-contain sm:h-72 md:h-96"
        src={mainHeroImg}
        alt="happy team image"
        layout="fill"
        priority={true}
      />
    </div>
  );
};

export default MainHeroImageOdrasli;
