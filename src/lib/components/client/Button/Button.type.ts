import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { MotionProps } from "motion/react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  MotionProps;
