import { createGlobalStyle } from "styled-components";

import "@/font/pretendard.css";

const GlobalStyles = createGlobalStyle`
  html {  
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.colors.white}
  }

  li {
    list-style: none;
  }

  input[type="text"] {
    outline: none;
    border: none;
  }

  button {
    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    border: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:active {
    color: ${({ theme }) => theme.colors.text};
  }

  html,
  body,
  main,
  a,
  nav,
  aside,
  input,
  label,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  span,
  svg,
  img,
  div,
  p,
  section {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.defaultFont};
    color: ${({ theme }) => theme.colors.text};
}
`;

export default GlobalStyles;
