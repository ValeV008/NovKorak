import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import OlderAdultsPage from "../components/OlderAdultsPage";
import SiteShell from "../components/SiteShell";

const OdrasliPage = () => (
  <SiteShell>
    <OlderAdultsPage />
  </SiteShell>
);

export default OdrasliPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};
