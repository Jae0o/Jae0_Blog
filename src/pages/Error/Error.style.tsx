import styled from "styled-components";

export const ErrorPageBackground = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const ErrorPageLayout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.transparent_50};
`;

export const ErrorPageContainer = styled.article`
  width: 40%;
  min-width: 30rem;

  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
`;

export const ErrorPageTitle = styled.h1`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
`;

export const ErrorPageMessage = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;
`;

export const ErrorPageActions = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 4rem;
`;
