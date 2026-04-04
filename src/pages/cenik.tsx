import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../components/Header";

const CenikPage = () => {
  const { t } = useTranslation("common");
  const itemsRaw = t("cenikPage.items", { returnObjects: true });
  const items: Array<{ name: string; price: string }> = Array.isArray(itemsRaw)
    ? (itemsRaw as any)
    : [];
  return (
    <div className={"bg-background grid gap-y-8 xl:gap-y-16"}>
      <Header />
      <section className={"bg-background py-8"} id="pricing">
        <div
          className={"container max-w-5xl mx-auto px-2 pt-4 pb-12"}
        >
          <h1
            className={"w-full my-2 text-5xl font-bold leading-tight text-center text-primary"}
          >
            {t("cenikPage.title")}
          </h1>
          <div className={"w-full mb-10"}>
            <div
              className={"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"}
            ></div>
          </div>
          <div className="md:hidden space-y-3 mb-8">
            {items.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="mt-1 text-primary font-bold">{item.price}</p>
              </article>
            ))}
          </div>
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full min-w-[640px] border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-primary text-background">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 text-center">{t("cenikPage.headers.service")}</th>
                  <th className="px-4 py-2 border-b border-gray-200 text-center">{t("cenikPage.headers.price")}</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                {items.map((item, idx) => (
                  <tr key={item.name} className={idx % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="px-4 py-2 border-b border-gray-200">{item.name}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-center">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm italic mt-2">{t("cenikPage.note")}</p>
        </div>
      </section>
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

export default CenikPage;
