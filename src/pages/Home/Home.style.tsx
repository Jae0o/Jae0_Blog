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
  height: 24rem;
  min-height: 24rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled(motion.h1)`
  font-size: 4.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  cursor: default;
`;

export const HomeSectionTitle = styled.p`
  width: 100%;
  padding: 6rem;
  margin-top: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  @media (${({ theme }) => theme.media.mobile}) {
    margin-top: 6rem;
    padding: 2rem;
  }
`;
