import { Trans, useTranslation } from "next-i18next";

import Divider from "./Divider";

const OdrasliFor = () => {
  const { t } = useTranslation("common");
  const odrasliForTexts = t("odrasliFor", { returnObjects: true }) as any;

  return (
    <section className="mx-auto container space-y-4 py-6">
      <h1
          className={"mx-auto md:w-full my-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center px-4"}
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
      <ul className="list-disc list-inside space-y-3 px-3 lg:px-[10%] max-w-5xl mx-auto">
        {odrasliForTexts.list.map((_: string, index: number) => (
          <li key={index}>
            <Trans
              i18nKey={`odrasliFor.list.${index}`}
              t={t}
              components={{ strong: <strong /> }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OdrasliFor;
