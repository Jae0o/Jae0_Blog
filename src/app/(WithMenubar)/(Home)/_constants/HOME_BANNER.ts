import { BLOG_BANNER, MASIL_BANNER, YAP_BANNER } from "@/lib/assets";

import { ROUTE_PATH } from "@/lib/constants";

export const HOME_BANNER_LIST = [
  {
    thumbnail: BLOG_BANNER,
    title: "블로그 제작 과정",
    description:
      "평소 구현하고 싶었던 기능을 마음껏 자유롭게 구현할 수 있는 나만의 도화지 같은 공간입니다.",
    stacks: ["React", "Typescript", "Firebase", "FramerMotion"],
    isRight: false,
    path: ROUTE_PATH.POST_LIST("BLOG"),
  },

  {
    thumbnail: MASIL_BANNER,
    title: "마실가실",
    description:
      "잠깐의 여유와 운동이 필요한 현대인들에게 산책을 기록하고 산책로를 공유하며 색다른 마실 경험을 느낄 수 있는 서비스입니다.",
    stacks: ["Next", "Typescript", "Tailwind", "Storybook", "KakaoMap"],
    isRight: true,
    path: ROUTE_PATH.POST_LIST("MASILGASIL"),
  },

  {
    thumbnail: YAP_BANNER,
    title: "Yap!",
    description:
      "Yap!은 누구에게나 열려있는 가벼운 분위기의 음악 공유 플랫폼입니다.",
    stacks: ["React", "Typescript", "StyledComponent", "ReactPlayer"],
    isRight: false,
    path: ROUTE_PATH.POST_LIST("YAP"),
  },
];
