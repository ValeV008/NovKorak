import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface SiteShellProps {
  children: ReactNode;
}

const SiteShell = ({ children }: SiteShellProps) => {
  return (
    <div className="site-shell">
      <Header />
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  );
};

export default SiteShell;
