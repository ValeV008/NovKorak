import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ContactForm from "../components/ContactForm";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import Product from "../components/Product";
import SiteShell from "../components/SiteShell";

const App = () => {
  return (
    <SiteShell>
    <div className={"bg-background grid sm:gap-y-4 xl:gap-y-8 mb-20"} id="home">
      <div className={"relative bg-background"}>
        <div className="max-w-full md:min-h-[60vh]">
          <MainHero />
        </div>
      </div>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <ContactForm />
      </LazyShow>
    </div>
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
