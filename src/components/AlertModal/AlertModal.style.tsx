import styled from "styled-components";

export const ModalMessage = styled.p`
  width: 100%;
  height: 10rem;
  padding: 0rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;
  word-break: keep-all;

  white-space: pre-line;
`;

export const ModalActions = styled.div`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
