const stackColors: { [key: string]: { bgColor: string; textColor: string } } = {
  React: { bgColor: "bg-React", textColor: "text-text-React" },
  Next: { bgColor: "bg-Next", textColor: "text-text-Next" },
  Firebase: { bgColor: "bg-Firebase", textColor: "text-text-Firebase" },
  Typescript: { bgColor: "bg-Typescript", textColor: "text-text-Typescript" },
  StyledComponent: {
    bgColor: "bg-StyledComponent",
    textColor: "text-text-StyledComponent",
  },
  Storybook: { bgColor: "bg-Storybook", textColor: "text-text-Storybook" },
  Tailwind: { bgColor: "bg-Tailwind", textColor: "text-text-Tailwind" },
  KakaoMap: { bgColor: "bg-KakaoMap", textColor: "text-text-KakaoMap" },
  FramerMotion: {
    bgColor: "bg-FramerMotion",
    textColor: "text-text-FramerMotion",
  },
  ReactPlayer: {
    bgColor: "bg-ReactPlayer",
    textColor: "text-text-ReactPlayer",
  },
};

interface getStackColorsParams {
  stack: string;
}

const getStackColors = ({ stack }: getStackColorsParams) => {
  const { bgColor, textColor } = stackColors[stack] ?? {
    bgColor: "bg-black_500",
    textColor: "text-white_500",
  };

  return { backgroundColor: bgColor, textColor: textColor };
};

export default getStackColors;
