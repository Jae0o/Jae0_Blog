"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "md" | "sm" | "xs";
  color?: "green" | "yellow" | "red" | "naked";

  onClick?: () => void;
}

const pickButtonSize = (size: "lg" | "md" | "sm" | "xs") => {
  switch (size) {
    case "lg":
      return "btn-lg";

    case "sm":
      return "btn-sm";

    case "xs":
      return "btn-xs";

    case "md":
      return "btn-md";

    default:
      return "btn-md";
  }
};

const pickButtonColor = (color: "green" | "yellow" | "red" | "naked") => {
  switch (color) {
    case "green":
      return "btn-secondary text-white";

    case "yellow":
      return "btn-primary text-white";

    case "red":
      return "btn-accent text-white";

    case "naked":
      return "btn-ghost";

    default:
      return "btn-secondary text-white";
  }
};

const Button = ({
  children,
  onClick,

  size = "md",
  color = "green",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`btn ${pickButtonSize(size)} ${pickButtonColor(color)}  ${className}`}
      onClickCapture={onClick}
      type="button">
      {children}
    </button>
  );
};

export default Button;
