import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PricingPage from "../components/PricingPage";
import SiteShell from "../components/SiteShell";

const CenikPage = () => (
  <SiteShell>
    <PricingPage />
  </SiteShell>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};

export default CenikPage;
