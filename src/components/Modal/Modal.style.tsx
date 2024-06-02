import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalBackground = styled(motion.section)`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.transparent_90};
`;

export const ModalLayoutOutline = styled(motion.div)<{
  $width: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.light_white};
  border-radius: 1.6rem;
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;

export const ModalLayout = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;

export const ModalActions = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 4rem;
  padding-right: 0.8rem;

  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalCloseButton = styled(motion.button)`
  height: 4rem;
  width: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
