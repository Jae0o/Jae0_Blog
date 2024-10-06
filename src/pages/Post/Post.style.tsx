import styled from "styled-components";

import { motion } from "framer-motion";

export const PostLayout = styled(motion.section)`
  width: 100%;
  height: 100%;
  padding: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (${({ theme }) => theme.media.tablet}) {
    padding: 1rem;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.medium};
`;
