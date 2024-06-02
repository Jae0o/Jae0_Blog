import { motion } from "framer-motion";
import styled from "styled-components";

export const BannerDecoration = styled.div`
  height: 2.8rem;
  min-height: 2.8rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light_white};
  border-top-right-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
`;

export const BannerDecorationButton = styled.button<{
  $backgroundColor: "red" | "green" | "yellow";
}>`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow.small};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  cursor: pointer;
`;

export const BannerDecorationIconBox = styled(motion.i)`
  width: 1.4rem;
  height: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;

  border-radius: 50%;
`;
