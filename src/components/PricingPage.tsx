import { useTranslation } from "next-i18next";

import GoldRule from "./GoldRule";

interface PricingItem {
  name: string;
  price: string;
}

interface PricingPageCopy {
  title: string;
  titleAccent: string;
  caption: string;
  headers: {
    service: string;
    price: string;
  };
  items: PricingItem[];
  note: string;
}

const PricingPage = () => {
  const { t } = useTranslation("common");
  const page = t("cenikPage", { returnObjects: true }) as unknown as PricingPageCopy;

  return (
    <main className="pricing-page">
      <section className="pricing-page__heading" aria-labelledby="pricing-page-title">
        <h1 id="pricing-page-title">
          {page.title} <span>{page.titleAccent}</span>
        </h1>
        <GoldRule centered />
      </section>

      <section className="pricing-page__table-section" aria-labelledby="pricing-page-title">
        <div className="pricing-page__card">
          <table className="pricing-page__table">
            <caption className="visually-hidden">{page.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{page.headers.service}</th>
                <th scope="col">{page.headers.price}</th>
              </tr>
            </thead>
            <tbody>
              {page.items.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pricing-page__note">{page.note}</p>
      </section>
    </main>
  );
};

export default PricingPage;
