import React, { useState } from "react";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  backgroundImage?: string;
};

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  backgroundImage,
}) => {
  const [flipped, setFlipped] = useState(false);

  // Only enable tap-to-flip on touch devices
  const [isTouch, setIsTouch] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    if (isTouch) {
      e.stopPropagation();
      setFlipped((f) => !f);
    }
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-72 perspective">
      <div
        className={
          `relative w-full h-full duration-700 transform-style-preserve-3d ` +
          `${isTouch && flipped ? "rotate-y-180" : ""} ${
            !isTouch ? "hover:rotate-y-180" : ""
          }`
        }
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <div
          className="absolute w-full h-full backface-hidden border border-gray-300 rounded-xl flex items-center justify-center shadow-md bg-white overflow-hidden"
          style={
            backgroundImage
              ? {
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          {/* Overlay for fade effect */}
          <div className="absolute inset-0 bg-white bg-opacity-70 z-0"></div>
          <div
            className="relative z-10 text-2xl text-primary font-bold"
            style={{ textShadow: "0 2px 8px rgba(255,255,255,1)" }}
          >
            {front}
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-100 border border-gray-300 rounded-xl flex items-center justify-center shadow-md p-5 text-justify">
          {back}
        </div>
      </div>
    </div>
  );
};

const flipCardsData = [
  {
    front: "Nevro-mišični taping",
    back: "Tehnika, prek katere vplivamo na mišično-skeletni, žilni, limfni in nevrološki sistem.",
    backgroundImage: "/assets/images/aboutMe.png",
  },
  {
    front: "Montessori pristop",
    back: "Pri delu z osebami z demenco je ključno, da ne pozabimo na človeka za diagnozo.",
    backgroundImage: "/assets/images/aboutMe.png",
  },
  {
    front: "Več aktivnosti",
    back: "Delovna terapija vam pomaga ponovno vzpostaviti rutino vsakodnevnih aktivnosti in vam omogoča, da se vrnete k svojim najljubšim dejavnostim.",
    backgroundImage: "/assets/images/aboutMe.png",
  },
  {
    front: "Več samostojnosti",
    back: "S pomočjo delovne terapije lahko dosežete večjo samostojnost pri vsakodnevnih opravilih.",
    backgroundImage: "/assets/images/aboutMe.png",
  },
];

const SquaresOdrasli = () => {
  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-7xl mx-auto`}>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 justify-items-center">
            {flipCardsData.map((card, idx) => (
              <FlipCard
                key={idx}
                front={card.front}
                back={card.back}
                backgroundImage={card.backgroundImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquaresOdrasli;
