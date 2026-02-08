import { useTranslation } from "next-i18next";

import Divider from "./Divider";

const OdrasliFor = () => {
  const { t } = useTranslation("common");
  const odrasliForTexts = t("odrasliFor", { returnObjects: true }) as any;

  return (
    <section className="mx-auto container space-y-4 py-6">
      <h1
          className={"mx-auto md:w-full my-2 text-5xl font-bold leading-tight text-center"}
        >
          {odrasliForTexts.header.split(" ").map((word: string, index: number) => (
            <span
              key={index}
              className={word == "tistega," || word == "those," ? "text-primary" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
      <ul className="list-disc list-inside space-y-3  px-3 lg:px-[10%]">
        {odrasliForTexts.list.map((item: string, index: number) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OdrasliFor;
