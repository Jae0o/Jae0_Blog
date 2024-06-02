import { motion } from "framer-motion";
import styled from "styled-components";

export const AsideProfile = styled.article`
  width: 22rem;
  height: 22rem;
  padding: 1rem;
  margin-top: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  user-select: none;
`;

export const AsideHeader = styled.header`
  width: 100%;
  height: 14rem;

  display: flex;
`;

export const AsideThumbnailContainer = styled.div`
  width: 14rem;
  height: 14rem;

  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;

export const AsideThumbnail = styled.img`
  width: 14rem;
  height: 14rem;

  border-radius: 1rem;
  object-fit: contain;
`;

export const AsideHeaderActions = styled.div`
  height: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const AsideTitleLayout = styled.span`
  width: 100%;
  flex-grow: 1;
  padding-top: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AsideTitle = styled(motion.h1)`
  text-align: center;
  font-size: 3.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  cursor: pointer;
  will-change: transform;
`;
