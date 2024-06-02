import styled from "styled-components";

export const Root = styled.main`
  width: 100%;
  height: 100%;

  display: flex;

  position: relative;

  @media (${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const OutletLayout = styled.section`
  width: 100%;
  height: 100%;

  position: relative;

  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.outlet};

  border: 1px solid red;

  @media (${({ theme }) => theme.media.tablet}) {
    width: 100%;
    height: calc(100% - 10rem);
  }
`;
