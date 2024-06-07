import styled from "styled-components";

export const HomeBannersLayout = styled.ul`
  width: 100%;
  padding: 8rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;

  @media (${({ theme }) => theme.media.mobile}) {
    gap: 2rem;
    padding: 2rem 2rem;
  }
`;
