import styled from "styled-components";

export const DetailTagLayout = styled.span`
  flex-grow: 1;
  padding: 0rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: scroll;
  ${({ theme }) => theme.scrollBarNone}
`;

export const DetailTagList = styled.ul`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  overflow: scroll;
  ${({ theme }) => theme.scrollBarNone}
`;

export const DetailTagItem = styled.li`
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 20rem;

  white-space: nowrap;
`;
