import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "@/font/pretendard.css";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html {  
    background-color: ${({ theme }) => theme.colors.white};

    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fontFamily.defaultFont};
    color: ${({ theme }) => theme.colors.text};
  }

  input[type="text"] {
    outline: none;
    border: none;
  }

  input {
    outline: none;
    border: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }



  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
    width: 100vw;

    position: relative;
  }
`;

export default GlobalStyles;
