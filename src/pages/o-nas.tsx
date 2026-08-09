import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AboutPage from "../components/AboutPage";
import SiteShell from "../components/SiteShell";

const ONasPage = () => (
  <SiteShell>
    <AboutPage />
  </SiteShell>
);

export default ONasPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};
