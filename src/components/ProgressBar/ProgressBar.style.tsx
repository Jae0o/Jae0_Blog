import { motion } from "framer-motion";
import styled from "styled-components";

export const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 1rem;
  min-height: 1rem;

  position: sticky;
  top: 0.1rem;
  left: 0;
  right: 0;
  z-index: 999;

  background: ${({ theme }) => theme.colors.green};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  opacity: 0.7;
  transform-origin: 0%;
`;
