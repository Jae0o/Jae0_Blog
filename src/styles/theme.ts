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

  gray: "#ccd1d9",
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

const media = {
  aside_max_height: "max-height : 700px",

  tablet: "max-width : 1050px",
  mobile: "max-width : 480px",
};

const stackColors = {
  main: {
    React: "#61dbfb",
    Next: "#000",
    Firebase: "#FFA611",
    TypeScript: "#3178c6",
    StyledComponent: "rgb(215,115,110)",
    Storybook: "rgb(225,57,123)",
    Tailwind: "rgb(59,176,243)",
    KakaoMap: "#fee500",
    FramerMotion: "rgb(132,0,250)",
    ReactPlayer: "rgb(225,118,77)",
  },
  text: {
    React: "#fafafa",
    Next: "#fafafa",
    Firebase: "#fafafa",
    TypeScript: "#fafafa",
    StyledComponent: "#fafafa",
    Storybook: "#fafafa",
    Tailwind: "#fafafa",
    KakaoMap: "#000",
    FramerMotion: "#fafafa",
    ReactPlayer: "#fafafa",
  },
};

// const stackColors = {
//   main: {
//     React: "#61dbfb",
//     Next: "#656d78",
//     Firebase: "#FFA611",
//     TypeScript: "#3178c6",
//     StyledComponent: "#d77368",
//     Storybook: "#e13977",
//     Tailwind: "#3bb0f3",
//     KakaoMap: "#fee500",
//     FramerMotion: "#8400fa",
//     ReactPlayer: "#e17653",
//   },
//   text: {
//     React: "#000000",
//     Next: "#fafafa",
//     Firebase: "#000000",
//     TypeScript: "#000",
//     StyledComponent: "#000",
//     Storybook: "#000",
//     Tailwind: "#000",
//     KakaoMap: "#000000",
//     FramerMotion: "#fafafa",
//     ReactPlayer: "#000",
//   },
// };

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
export type Media = typeof media;
export type StackColors = typeof stackColors;

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
  media,
  stackColors,
};

export default theme;
