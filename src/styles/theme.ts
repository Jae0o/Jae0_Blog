import { DefaultTheme, css } from "styled-components";

const colors = {
  black: "#323133",
  light_black: "#434a54",

  red: "#da4453",
  light_red: "#ed5565",

  yellow: "#ffce54",

  green: "#a0d468",
  dark_green: "#8cc152",

  white: "#fafafa",
  light_white: "#e6e9ed",

  grey: "#ccd1d9",
  dark_gray: "#656d78",

  text: "#323133",
  text_point: "#ffce54",

  transparent_10: "#23232310",
  transparent_30: "#23232330",
  transparent_50: "#23232350",
  transparent_90: "#23232390",
};

const fontSize = {
  small: "1rem",
  semiSmall: "1.2rem",
  medium: "1.4rem",
  semiLarge: "1.6rem",
  large: "1.8rem",
  semiBig: "2rem",
  big: "2.4rem",
};

const radius = {
  size4: "0.4rem",
  size8: "0.8rem",
  size12: "1.2rem",
  size16: "1.6rem",
  size20: "2rem",
  circle: "50%",
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  semiBolder: 800,
  bolder: 900,
};

const zIndex = {
  outlet: 0,
  aside: 10,
  nav_background: 10,
  nav_menubar: 11,

  modal: 500,
};

const scrollBarNone = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const transition = {
  normal: `0.3s`,
};

const opacity = {
  low: 0.3,
  normal: 0.5,
  high: 0.7,
};

const shadow = {
  medium: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)",
  small: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
};

const fontFamily = {
  defaultFont: `"Pretendard Variable", "Pretendard", "-apple-system",
  "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

export type ColorsType = typeof colors;
export type FontWeightType = typeof fontWeight;
export type SizeType = typeof fontSize;
export type Radius = typeof radius;
export type ZIndex = typeof zIndex;
export type ScrollBarNone = typeof scrollBarNone;
export type Transition = typeof transition;
export type Opacity = typeof opacity;
export type FontFamily = typeof fontFamily;
export type Shadow = typeof shadow;

const theme: DefaultTheme = {
  colors,
  fontWeight,
  fontSize,
  radius,
  zIndex,
  scrollBarNone,
  opacity,
  transition,
  fontFamily,
  shadow,
};

export default theme;
