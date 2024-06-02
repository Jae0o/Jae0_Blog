import styled from "styled-components";

export const AlertModalLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ModalMessage = styled.p`
  width: 100%;
  /* height: 10rem; */
  padding: 0rem 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.3;
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
`;

export const ModalActions = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
