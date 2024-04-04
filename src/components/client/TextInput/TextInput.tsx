"use client";

import { RegisterOptions, useFormContext } from "react-hook-form";

const pickInputSize = (size: "lg" | "md" | "sm" | "xs") => {
  switch (size) {
    case "md":
      return "input-md";

    case "lg":
      return "input-lg";

    case "sm":
      return "input-sm";

    case "xs":
      return "input-xs";

    default:
      return "input-md";
  }
};

const pickInputColor = (color: "green" | "yellow" | "red" | "naked") => {
  switch (color) {
    case "green":
      return "input-secondary text-[--color-text_main]";

    case "yellow":
      return "input-primary text-[--color-text_main]";

    case "red":
      return "input-accent text-[--color-text_main]";

    case "naked":
      return "input-ghost text-[--color-text_main]";

    default:
      return "input-secondary text-[--color-text_main]";
  }
};

interface TextInputProps {
  name: string;
  placeholder?: string;
  validate?: RegisterOptions;

  className?: string;
  size?: "lg" | "md" | "sm" | "xs";
  color?: "green" | "yellow" | "red" | "naked";
}

const TextInput = ({
  name,
  validate,
  placeholder = "",
  className = "",
  size = "md",
  color = "green",
}: TextInputProps) => {
  const { register } = useFormContext();

  return (
    <input
      type="text"
      className={`input ${pickInputSize(size)} ${pickInputColor(color)} w-full ${className}`}
      placeholder={placeholder}
      {...register(name, validate)}
    />
  );
};

export default TextInput;
