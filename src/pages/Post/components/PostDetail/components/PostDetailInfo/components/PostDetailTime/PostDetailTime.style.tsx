import styled from "styled-components";

export const DetailTimeContainer = styled.span`
  padding: 0rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DetailTimeContentTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  white-space: nowrap;
`;

export const DetailTimeContent = styled.p`
  height: 3rem;

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
