import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const PostItem = styled(motion.li)`
  width: 90%;
  min-height: 14rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;

  border-radius: 1.2rem;

  user-select: none;
  cursor: pointer;
  overflow: hidden;

  @media (${({ theme }) => theme.media.mobile}) {
    height: fit-content;
    min-height: 30rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PostItemThumbnailLayout = styled.div`
  width: 16rem;
  min-width: 16rem;
  height: 12rem;
  min-height: 12rem;
  margin-right: 1rem;

  position: relative;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.small};

  @media (${({ theme }) => theme.media.mobile}) {
    width: 20rem;
    min-width: 20rem;
    height: 15rem;
    min-height: 15rem;

    margin-right: 0rem;
  }
`;

export const PostItemThumbnail = styled.img`
  width: 16rem;
  min-width: 16rem;
  height: 12rem;
  min-height: 12rem;

  border-radius: 1.2rem;
  object-fit: cover;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 20rem;
    min-width: 20rem;
    height: 15rem;
    min-height: 15rem;
  }
`;

export const PostItemCreateAt = styled.p`
  height: 1.6rem;
  padding: 0 0.6rem;

  position: absolute;
  top: 1rem;
  left: -1rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 1.2rem;

  font-size: ${({ theme }) => theme.fontSize.semiSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  box-shadow: ${({ theme }) => theme.shadow.medium};
`;

export const PostItemInfoLayout = styled.span`
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;

  overflow: hidden;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: fit-content;
    padding: 1.4rem 0;
  }
`;

export const PostItemTitle = styled.h2`
  width: 100%;
  height: 3.2rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.semiBig};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  overflow: scroll;
  text-overflow: ellipsis;
  ${({ theme }) => theme.scrollBarNone}

  white-space: nowrap;
`;

const CategoryTagItem = css`
  width: fit-content;
  padding: 0.6rem 1rem;

  display: flex;
  align-items: center;

  border-radius: 99rem;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  white-space: nowrap;
`;

export const PostItemCategory = styled.p`
  ${CategoryTagItem}

  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const PostItemTagList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const PostItemTag = styled.li`
  ${CategoryTagItem}

  margin-right: 0.6rem;

  background-color: ${({ theme }) => theme.colors.green};
`;
