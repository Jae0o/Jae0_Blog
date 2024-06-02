import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeLayout = styled(motion.section)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  ${({ theme }) => theme.scrollBarNone}
`;

export const HomeTitleContainer = styled.article`
  width: 100%;
  height: 32rem;
  min-height: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled(motion.h1)`
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  cursor: default;
`;
