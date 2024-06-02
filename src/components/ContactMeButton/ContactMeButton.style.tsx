import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactMeButton = styled(motion.a)`
  width: 5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow.medium};

  transition: opacity 0.3s;
`;
