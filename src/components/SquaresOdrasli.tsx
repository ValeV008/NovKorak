import React from "react";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => (
  <div className="w-72 h-52 perspective">
    <div className="relative w-full h-full duration-700 transform-style-preserve-3d hover:rotate-y-180">
      <div className="absolute w-full h-full backface-hidden bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow-md">
        {front}
      </div>
      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-100 border border-gray-300 rounded-xl flex items-center justify-center shadow-md p-5 text-justify">
        {back}
      </div>
    </div>
  </div>
);

const SquaresOdrasli = () => {
  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-7xl mx-auto`}>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-10 p-8">
            <FlipCard
              front="Nevro-mišični taping"
              back="Tehnika, prek katere vplivamo na mišično-skeletni, žilni, limfni in nevrološki sistem."
            />
            <FlipCard
              front="Montessori pristop"
              back="Pri delu z osebami z demenco je ključno, da ne pozabimo na človeka za diagnozo."
            />
            <FlipCard
              front="Več aktivnosti"
              back="Delovna terapija vam pomaga ponovno vzpostaviti rutino vsakodnevnih aktivnosti in vam omogoča, da se vrnete k svojim najljubšim dejavnostim."
            />
            <FlipCard
              front="Več samostojnosti"
              back="S pomočjo delovne terapije lahko dosežete večjo samostojnost pri vsakodnevnih opravilih."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquaresOdrasli;
