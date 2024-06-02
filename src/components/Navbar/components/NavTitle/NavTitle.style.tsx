import { motion } from "framer-motion";
import styled from "styled-components";

export const NavbarTitleLayout = styled(motion.h1)`
  height: 100%;
  width: 14rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  cursor: pointer;
`;
