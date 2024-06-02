import { motion } from "framer-motion";
import styled from "styled-components";

export const NavMenubar = styled(motion.ul)`
  min-height: fit-content;
  padding: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  position: absolute;
  top: 8rem;
  right: 0;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.medium};
  z-index: ${({ theme }) => theme.zIndex.nav_menubar};
`;
