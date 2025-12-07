// This page has been renamed to /o-nas.
// Keeping a lightweight redirect component to avoid 404s during deploys.
import { useEffect } from "react";

const AboutMeRedirect = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/o-nas");
    }
  }, []);
  return null;
};

export default AboutMeRedirect;
