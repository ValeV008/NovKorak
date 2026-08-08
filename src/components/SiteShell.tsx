import { ReactNode } from "react";

import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

interface SiteShellProps {
  children: ReactNode;
}

const SiteShell = ({ children }: SiteShellProps) => {
  const { pathname } = useRouter();

  return (
    <div className="site-shell">
      <Header />
      <div className="site-content">{children}</div>
      <Footer variant={pathname === "/" ? "home" : "subpage"} />
    </div>
  );
};

export default SiteShell;
