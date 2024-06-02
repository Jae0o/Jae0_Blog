import styled from "styled-components";

export const AsideMenubar = styled.ul`
  width: 22rem;
  flex-grow: 1;
  padding: 1rem;

  margin: 3.2rem 0rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  overflow-y: auto;

  ${({ theme }) => theme.scrollBarNone}
`;
