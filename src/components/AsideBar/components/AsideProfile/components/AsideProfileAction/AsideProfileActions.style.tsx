import { motion } from "framer-motion";
import styled from "styled-components";

export const AsideProfileAction = styled(motion.a)<{
  $type: "home" | "search" | "write";
}>`
  width: 3.6rem;
  height: 3.6rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme, $type }) =>
    $type === "home"
      ? theme.colors.green
      : $type === "write"
        ? theme.colors.red
        : theme.colors.yellow};
`;
