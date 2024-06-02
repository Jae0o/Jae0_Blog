import styled from "styled-components";

export const HomePostList = styled.ul`
  width: 100%;
  max-width: 120rem;
  padding: 5rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (${({ theme }) => theme.media.mobile}) {
    padding: 5rem 0rem;
  }
`;

export const ObserveContainer = styled.li`
  width: 100%;
  height: 12rem;
`;

export const ObserveTarget = styled.div`
  width: 100%;
  height: 100%;
`;
