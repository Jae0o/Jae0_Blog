import { motion } from "framer-motion";
import styled from "styled-components";

export const BannerDecoration = styled.div`
  height: 3.2rem;
  min-height: 3.2rem;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.light_white};
  border-top-right-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
`;

export const BannerDecorationButton = styled.button<{
  $backgroundColor: "red" | "green" | "yellow";
}>`
  width: 1.6rem;
  min-width: 1.6rem;
  height: 1.6rem;
  min-height: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 99rem;
  box-shadow: ${({ theme }) => theme.shadow.small};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  cursor: pointer;
`;

export const BannerDecorationIconBox = styled(motion.i)`
  width: 1.6rem;
  min-width: 1.6rem;
  height: 1.6rem;
  min-height: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;

  border-radius: 99rem;
`;
