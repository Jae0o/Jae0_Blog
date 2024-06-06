import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeBannerLayout = styled(motion.li)<{ $isRight?: boolean }>`
  width: 100%;
  height: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $isRight }) => ($isRight ? "row-reverse" : "row")};
  gap: 6rem;

  cursor: pointer;

  @media (max-width: 800px) {
    justify-content: ${({ $isRight }) =>
      $isRight ? "flex-end" : "flex-start"};
    flex-direction: row;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    justify-content: center;
  }
`;

export const HomeBannerItemImage = styled.img`
  width: 40rem;
  height: 100%;

  border-radius: 1.6rem;
  box-shadow: ${({ theme }) => theme.shadow.small};

  object-fit: contain;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 30rem;
    height: fit-content;
  }
`;

export const HomeBannerInfo = styled.span`
  width: 30rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HomeBannerTitle = styled.h2`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const HomeBannerDescription = styled.p`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.4;
  word-break: keep-all;
`;

export const HomeBannerStackList = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const HomeBannerStackItem = styled.li<{ $stack: string }>`
  padding: 0.6rem 1rem;

  border-radius: 99rem;
  background-color: ${({ theme, $stack }) =>
    theme.stackColors.main[$stack] ?? theme.colors.green};

  color: ${({ theme, $stack }) =>
    theme.stackColors.text[$stack] ?? theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.4;
  word-break: keep-all;
`;
