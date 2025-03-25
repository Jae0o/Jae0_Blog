"use client";

import { TextInputProps } from "./TextInput.type";

import { twMerge } from "tailwind-merge";

const TextInput = ({ className, ...rest }: TextInputProps) => {
  return (
    <input
      type="text"
      className={twMerge(
        "py-[0.4rem] px-[0.6rem] border-2 border-yellow_500 rounded-[0.4rem] text-[1.4rem]",
        "focus:border-red_500 active:border-red_500 focus:outline-none",
        className,
      )}
      {...rest}
    />
  );
};

export default TextInput;
