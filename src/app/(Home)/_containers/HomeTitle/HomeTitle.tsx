"use client";

import tailwindConfig from "../../../../../tailwind.config";

import { motion } from "motion/react";
import resolveConfig from "tailwindcss/resolveConfig";

const HomeTitle = () => {
  const { theme } = resolveConfig(tailwindConfig);
  return (
    <span className="w-full h-[24rem] min-h-[24rem] flex items-center justify-center">
      <motion.h1
        className="text-[4.8rem] font-bold text-center select-none"
        whileHover={{
          color: theme.colors.yellow_500,
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        Jae0's Blog
      </motion.h1>
    </span>
  );
};

export default HomeTitle;
