import styled from "styled-components";

export const DetailInfo = styled.span`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  overflow: hidden;
`;

export const DetailInfoContentTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  white-space: nowrap;
`;
