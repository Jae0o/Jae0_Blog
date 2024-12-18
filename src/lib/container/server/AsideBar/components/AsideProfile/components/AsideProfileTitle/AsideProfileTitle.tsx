"use client";

import { useRouter } from "next/navigation";

import { ROUTE_PATH } from "@/lib/constants";

import { motion } from "motion/react";

const AsideProfileTitle = () => {
  const route = useRouter();

  return (
    <span className="w-full grow-[1] pt-[0.6rem] flex items-center justify-center">
      <motion.h1
        className="text-center text-[3.2rem] font-bold cursor-pointer will-change-[scale]"
        onClick={() => route.push(ROUTE_PATH.HOME)}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Jae0's Blog
      </motion.h1>
    </span>
  );
};

export default AsideProfileTitle;
