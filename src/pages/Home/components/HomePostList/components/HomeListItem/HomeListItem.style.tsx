import styled, { css } from "styled-components";

import { motion } from "framer-motion";

const OptionItem = css`
  padding: 0.4rem 1.2rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadow.small};
  border-radius: 20rem;

  font-size: ${({ theme }) => theme.fontSize.semiSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.1rem;
  white-space: nowrap;
`;

export const HomeListItemLayout = styled(motion.li)`
  width: 32rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 1.2rem;

  user-select: none;
  cursor: pointer;
`;

export const HomeListItemThumbnailContainer = styled.div`
  width: 28rem;
  height: 21rem;

  position: relative;

  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.small};
`;

export const HomeListItemThumbnail = styled.img`
  width: 28rem;
  height: 21rem;

  border-radius: 1.2rem;

  object-fit: cover;
`;

export const HomeListItemCreateAt = styled.p`
  ${OptionItem}

  position: absolute;
  top: 1.6rem;
  left: -0.8rem;
`;

export const HomeListItemCategory = styled.p`
  ${OptionItem}

  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

export const HomeListItemTitle = styled.h2`
  width: 28rem;
  height: 6rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  word-break: keep-all;
`;

export const HomeListItemTagList = styled.ul`
  padding: 0.6rem 0.3rem;
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  overflow: scroll;
  gap: 0.6rem;

  ${({ theme }) => theme.scrollBarNone}
`;

export const HomeListItemTag = styled.li`
  ${OptionItem}

  background-color: ${({ theme }) => theme.colors.green};
`;
