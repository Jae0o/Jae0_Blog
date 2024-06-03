import styled from "styled-components";

export const DetailCategoryLayout = styled.span`
  padding: 0rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const DetailCategoryContent = styled.p`
  height: 3rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 20rem;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
