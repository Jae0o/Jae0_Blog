"use client";

import { useRouter } from "next/navigation";

import { MouseEvent, useCallback } from "react";

import { AsideProfileButtonProps } from "./AsideProfileButton.type";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const AsideProfileButton = ({
  action,
  path,
  Icon,
}: AsideProfileButtonProps) => {
  const router = useRouter();

  const handleRoute = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(path);
    },
    [path],
  );

  return (
    <motion.a
      className={twMerge(
        "w-[3.6rem] h-[3.6rem] relative flex items-center justify-center rounded-[0.6rem] shadow-[`1px 1px 4px 1px rgba(0, 0, 0, 0.3)`]",
        action === "home" && "bg-green_500",
        action === "search" && "bg-yellow_500",
        action === "write" && "bg-red_500",
      )}
      href={path}
      onClick={handleRoute}
      aria-label={`link move ${action}`}
      whileTap={{
        scale: 0.85,
      }}
      whileHover={{
        filter: "brightness(80%)",
      }}
    >
      {Icon}
    </motion.a>
  );
};

export default AsideProfileButton;
