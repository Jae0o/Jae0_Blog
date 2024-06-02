import styled from "styled-components";

export const AsideFooter = styled.footer`
  width: 24rem;
  height: 8rem;
  min-height: 6rem;

  display: flex;
  justify-content: center;
  gap: 1.6rem;

  @media (${({ theme }) => theme.media.aside_max_height}) {
    position: absolute;
    top: 0.5rem;
    left: 4rem;
  }
`;
