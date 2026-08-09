import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "../components/HomePage";
import SiteShell from "../components/SiteShell";

const App = () => {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "sl", ["common"])),
    },
  };
};

export default App;
