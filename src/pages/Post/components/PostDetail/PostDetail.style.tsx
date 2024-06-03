import styled from "styled-components";

export const PostDetailLayout = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 1.2rem;
`;

export const PostDetailContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  overflow: scroll;

  ${({ theme }) => theme.scrollBarNone}
`;

export const PostDetailContent = styled.div`
  width: 100%;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  overflow: scroll;
  ${({ theme }) => theme.scrollBarNone}

  user-select: none;
`;

export const PostDetailDivider = styled.span`
  width: 100%;
  height: 0.4rem;
  margin: 4rem 0rem;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 99rem;
`;
