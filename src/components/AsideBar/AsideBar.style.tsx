import { motion } from "framer-motion";
import styled from "styled-components";

export const AsideBar = styled(motion.aside)`
  flex-shrink: 0;
  width: 24rem;
  height: 100vh;

  display: flex;
  align-items: flex-end;

  position: relative;

  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  z-index: ${({ theme }) => theme.zIndex.aside};
`;

export const AsideBarContainer = styled.div`
  width: 22rem;
  height: calc(100% - 8rem);

  display: flex;
  flex-direction: column;

  position: absolute;
  left: 4rem;
  top: 0rem;
`;
