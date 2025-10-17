import React from "react";

const Pricing = () => {
  return (
    <section className={"bg-background py-8"} id="pricing">
      <div
        className={"container max-w-5xl mx-auto px-2 pt-4 pb-12 text-primary"}
      >
        <h1
          className={"w-full my-2 text-5xl font-bold leading-tight text-center text-primary"}
        >
          Cenik
        </h1>
        <div className={"w-full mb-10"}>
          <div
            className={"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"}
          ></div>
        </div>
        <table className="w-full table-fixed border border-gray-300 rounded-lg overflow-hidden mb-8">
          <thead className="bg-primary text-background">
            <tr>
              <th className="px-4 py-2 border-b text-center">Storitev</th>
              <th className="px-4 py-2 border-b text-center">Cena</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="px-4 py-2 border-b">Terapevtska obravnava</td>
              <td className="px-4 py-2 border-b text-center">60 €</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border-b">Paket 6 obravnav</td>
              <td className="px-4 py-2 border-b text-center">340 €</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Kinesiotaping</td>
              <td className="px-4 py-2 border-b text-center">10 €</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border-b">
                Posvet prek daljave (30 min)
              </td>
              <td className="px-4 py-2 border-b text-center">30 €</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">
                Posvet prek daljave (60 min)
              </td>
              <td className="px-4 py-2 border-b text-center">60 €</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2">Delovnoterapevtsko poročilo</td>
              <td className="px-4 py-2 text-center">30 €</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-700 italic mt-2">
          *Terapije potekajo na domu uporabnika. Za kraje izven našega rednega
          delovanja se obračunajo potni stroški po uradni kilometrini.
        </p>
        {/* <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 text-gray-500`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                {secondPlan?.price}
                <span className={`text-base text-primary`}>
                  {" "}
                  {secondPlan?.priceDetails}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
