import React from "react";

import { motion } from "framer-motion";

const LazyShow = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="lazy-div"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
