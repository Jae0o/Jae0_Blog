import styled from "styled-components";

export const ModalTitle = styled.h2`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  user-select: none;
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const ModalActions = styled.div`
  width: 100%;
  height: 6rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
