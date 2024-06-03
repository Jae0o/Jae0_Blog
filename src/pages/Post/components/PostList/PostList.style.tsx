import styled from "styled-components";

export const PostListLayout = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
`;

export const PostListBannerContainer = styled.div`
  width: 100%;
`;

export const PostListContainer = styled.ul`
  width: 100%;
  flex-grow: 1;
  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  overflow: scroll;

  ${({ theme }) => theme.scrollBarNone}
`;
