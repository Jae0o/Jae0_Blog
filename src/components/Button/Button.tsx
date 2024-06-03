import { HTMLMotionProps } from "framer-motion";

import React, { MouseEvent } from "react";

import * as S from "./Button.style";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  backgroundColor?: "green" | "red" | "yellow";
  shadow?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  backgroundColor = "green",
  shadow = false,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!onClick || disabled) {
      return;
    }

    onClick(e);
  };

  return (
    <S.ButtonStyle
      type="button"
      onClick={handleClick}
      $color={backgroundColor}
      $shadow={shadow}
      $disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.97, opacity: 0.8 }}
      whileHover={disabled ? {} : { filter: "brightness(85%)" }}
      {...rest}
    >
      {children}
    </S.ButtonStyle>
  );
};

export default Button;
