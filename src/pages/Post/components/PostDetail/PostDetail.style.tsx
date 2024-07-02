import styled from "styled-components";

export const PostDetailLayout = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 1.2rem;
`;

export const PostDetailLoading = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
