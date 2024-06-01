import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonStyle = styled(motion.button)<{
  $color: "green" | "yellow" | "red";
  $shadow: boolean;
  $disabled: boolean;
}>`
  padding: 1rem 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $color }) => theme.colors[$color]};
  border-radius: 0.8rem;
  box-shadow: ${({ theme, $shadow }) => $shadow && theme.shadow.small};

  opacity: ${({ theme, $disabled }) => ($disabled ? theme.opacity.normal : 1)};

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;
