"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

import { getStackColors } from "@/app/(Home)/_utils";
import { ROUTE_PATH } from "@/lib/constants";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface HomeBannerProps {
  thumbnail: StaticImageData;
  title: string;
  description: string;
  stacks: string[];
  isRight: boolean;
  path: string;
}

const HomeBanner = ({
  title,
  isRight,
  thumbnail,
  description,
  stacks,
  path,
}: HomeBannerProps) => {
  const router = useRouter();

  return (
    <motion.li
      className={twMerge(
        "w-full max-w-[80rem] h-[32rem] py-0 px-[2rem] flex items-center justify-center gap-[6rem] cursor-pointer",
        isRight ? "flex-row-reverse" : "flex-row",
        isRight ? "home_banner:justify-end" : "home_banner:justify-start",
        "home_banner:flex-row",
        "mobile:justify-center",
      )}
      whileHover={{ scale: 1.04 }}
      onClick={() => router.push(path)}
    >
      <Image
        className={twMerge(
          "w-[40rem] min-w-[40rem] h-[32rem] min-h-[32rem] rounded-[1.6rem] shadow-small object-contain",
          "mobile:w-[30rem] mobile:min-w-[30rem] mobile:h-[24rem] mobile:min-h-[24rem]",
        )}
        src={thumbnail}
        alt={title}
      />

      <span
        className={twMerge(
          "w-[30rem] min-w-[30rem] h-full flex flex-col justify-center gap-[3.2rem]",
          "home_banner:hidden",
        )}
      >
        <h2 className="w-full text-big font-bold">{title}</h2>
        <p className="w-full text-large font-medium leading-[1.4] break-keep">
          {description}
        </p>

        <ul className="w-full flex flex-wrap gap-[1.2rem]">
          {stacks.map(stack => {
            const { backgroundColor, textColor } = getStackColors({ stack });

            return (
              <li
                key={stack}
                className={twMerge(
                  "py-[0.6rem] px-[1rem] rounded-[99rem] text-[1.6rem] font-semiBold leading-[1.4] break-keep",
                  backgroundColor,
                  textColor,
                )}
              >
                {stack}
              </li>
            );
          })}
        </ul>
      </span>
    </motion.li>
  );
};

export default HomeBanner;
