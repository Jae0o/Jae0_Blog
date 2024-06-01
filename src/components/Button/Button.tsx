import { HTMLMotionProps } from "framer-motion";

import { MouseEvent } from "react";

import * as S from "./Button.style";

interface ButtonProps extends HTMLMotionProps<"button"> {
  text: string;
  backgroundColor?: "green" | "red" | "yellow";
  shadow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  backgroundColor = "green",
  shadow = false,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!onClick || disabled) {
      return;
    }

    onClick();
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
      {text}
    </S.ButtonStyle>
  );
};

export default Button;
