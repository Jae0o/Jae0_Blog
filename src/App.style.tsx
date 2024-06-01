import styled from "styled-components";

export const ModalPlace = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: ${({ theme }) => theme.zIndex.modal};
`;
