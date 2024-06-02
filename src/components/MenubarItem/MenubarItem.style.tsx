import { motion } from "framer-motion";
import styled from "styled-components";

export const MenubarItemLayout = styled.li`
  width: 21rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 0.3s;
  will-change: opacity;

  cursor: pointer;
  user-select: none;
`;

export const MenubarItemDecoration = styled.div`
  width: 100%;
  height: 0.5rem;
  margin-top: 0.2rem;

  overflow: hidden;
`;

export const MenubarItemDecorationItem = styled(motion.div)`
  width: 100%;
  height: 100%;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.red};
  filter: brightness(80%);
`;

export const MenubarItemContent = styled(motion.div)`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  box-shadow: ${({ theme }) => theme.shadow.small};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  will-change: transform;
`;

export const MenubarItemIconContainer = styled.i`
  height: 100%;
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
`;

export const MenubarItemTitle = styled.h2`
  flex-grow: 1;
  height: 100%;
  padding-left: 1rem;

  display: flex;
  align-items: center;

  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
