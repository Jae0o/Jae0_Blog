import styled from "styled-components";

export const SkeletonHomeListLayout = styled.ul`
  width: 100%;
  max-width: 90rem;
  padding: 5rem 5rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media (${({ theme }) => theme.media.mobile}) {
    padding: 5rem 0rem;
  }
`;
