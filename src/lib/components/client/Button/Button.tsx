"use client";

import { MouseEvent, useRef } from "react";

import { ButtonProps } from "./Button.type";
import { Ripple } from "./components";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
  const rippleRef = useRef<{
    createRipple: (event: MouseEvent<HTMLButtonElement>) => void;
  }>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { current } = rippleRef;

    if (current) {
      current.createRipple(event);
    }

    if (!onClick) return;
    onClick(event);
  };

  return (
    <motion.button
      className={twMerge(
        "relative bg-red_300 text-[1.6rem] border-2 border-none rounded-[1rem] py-[1rem] px-[1.2rem] overflow-hidden cursor-pointer",
        className,
      )}
      onClick={handleClick}
      whileTap={{ scale: "0.98" }}
      {...rest}
    >
      {children}
      <Ripple ref={rippleRef} />
    </motion.button>
  );
};

export default Button;
