import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const HamburgerStick = css`
  width: 50px;
  height: 6px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.text};
  pointer-events: none;
`;

export const HamburgerMenu = styled(motion.div)`
  width: 50px;
  height: 50px;

  margin-right: 2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  cursor: pointer;
`;

export const HamburgerLineOne = styled(motion.div)`
  ${HamburgerStick}
`;

export const HamburgerLineTwo = styled(motion.div)`
  ${HamburgerStick}
`;

export const HamburgerLineThree = styled(motion.div)`
  ${HamburgerStick}
`;
