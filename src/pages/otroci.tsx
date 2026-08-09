import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ChildrenPage from "../components/ChildrenPage";
import SiteShell from "../components/SiteShell";

const OtrociPage = () => (
  <SiteShell>
    <ChildrenPage />
  </SiteShell>
);

export default OtrociPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "sl", ["common"])),
  },
});
