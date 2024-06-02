import { motion } from "framer-motion";
import styled from "styled-components";

export const NavbarBackground = styled(motion.section)`
  width: 100%;
  height: 10rem;

  position: relative;
  top: 0;

  z-index: ${({ theme }) => theme.zIndex.nav_background};
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 8rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;
