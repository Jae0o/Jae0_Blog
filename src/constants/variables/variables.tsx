import React from "react";

import BLOG_THUMBNAIL from "@/assets/banner/BLOG_THUMBNAIL.webp";
import MASIL_THUMBNAIL from "@/assets/banner/MASIL_THUMBNAIL.webp";
import YAP_THUMBNAIL from "@/assets/banner/YAP_THUMBNAIL.webp";
import { Advice, PostData } from "@/types/original";

import { CONTACT_ME_URL } from "../url/url";

const GithubLogoIcon = React.lazy(
  () => import("@/components/Icons/GithubLogoIcon/GithubLogoIcon"),
);
const BlueBookIcon = React.lazy(
  () => import("@/components/Icons/BlueBookIcon/BlueBookIcon"),
);
const BrownBookIcon = React.lazy(
  () => import("@/components/Icons/BrownBookIcon/BrownBookIcon"),
);
const DisplayIcon = React.lazy(
  () => import("@/components/Icons/DisplayIcon/DisplayIcon"),
);
const EmailIcon = React.lazy(
  () => import("@/components/Icons/EmailIcon/EmailIcon"),
);
const InstagramLogoIcon = React.lazy(
  () => import("@/components/Icons/InstagramLogoIcon/InstagramLogoIcon"),
);
const OrangeBookIcon = React.lazy(
  () => import("@/components/Icons/OrangeBookIcon/OrangeBookIcon"),
);
const GreenBookIcon = React.lazy(
  () => import("@/components/Icons/GreenBookIcon/GreenBookIcon"),
);

export const NEW_POST: PostData = {
  id: "newPost",
  createAt: "",
  updateAt: "",
  title: "",
  isPublic: true,
  category: "",
  tag: [],
  thumbnail: "",
  miniThumbnail: "",
  main: "",
};

export const ADVICE_DEFAULT: Advice = {
  advice: "Software, like entropy, tends to increase over time.",
  author: "Boyle's Law of Software Evolution",
};

export const ADVICE_LIST: Advice[] = [
  {
    advice: "Hello, World!",
    author: "Brian Kernighan",
  },
  {
    advice: "It's not a bug, it's a feature.",
    author: "Anonymous",
  },
  {
    advice: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    advice: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    advice: "Programming is not about typing, it's about thinking.",
    author: "Rich Hickey",
  },
  {
    advice: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    advice: "The best error message is the one that never shows up.",
    author: "Thomas F. Wilson",
  },
  {
    advice:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    advice:
      "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  },
  {
    advice:
      "There are only two hard things in computer science: cache invalidation and naming things.",
    author: "Phil Karlton",
  },
];

export const CONTACT_ME_DATA = [
  { url: CONTACT_ME_URL.GIT_HUB, IconComponent: <GithubLogoIcon /> },
  { url: CONTACT_ME_URL.INSTAGRAM, IconComponent: <InstagramLogoIcon /> },
  { url: CONTACT_ME_URL.EMAIL, IconComponent: <EmailIcon /> },
];

export const MENUBAR_LIST = [
  {
    title: "Blog 작업 기록",
    category: "BLOG",
    IconComponent: <OrangeBookIcon />,
  },
  { title: "Yap 기록", category: "YAP", IconComponent: <BlueBookIcon /> },
  {
    title: "Masil Gasil 기록",
    category: "MASILGASIL",
    IconComponent: <GreenBookIcon />,
  },
  { title: "회고 기록", category: "WORK", IconComponent: <BrownBookIcon /> },
  { title: "Frontend", category: "Frontend", IconComponent: <DisplayIcon /> },
];

export const BANNER_ITEM_LIST = [
  {
    thumbnail: BLOG_THUMBNAIL,
    title: "블로그 제작 과정",
    description:
      "평소 구현하고 싶었던 기능을 마음껏 자유롭게 구현할 수 있는 나만의 도화지 같은 공간입니다.",
    stacks: ["React", "TypeScript", "Firebase", "Framer-motion"],
    isRight: false,
  },
  {
    thumbnail: MASIL_THUMBNAIL,
    title: "마실가실",
    description:
      "잠깐의 여유와 운동이 필요한 현대인들에게 산책을 기록하고 산책로를 공유하며 색다른 마실 경험을 느낄 수 있는 서비스입니다.",
    stacks: ["Next", "TypeScript", "Tailwind", "Storybook", "Kakao Map"],
    isRight: true,
  },
  {
    thumbnail: YAP_THUMBNAIL,
    title: "Yap!",
    description:
      "Yap!은 누구에게나 열려있는 가벼운 분위기의 음악 공유 플랫폼입니다.",
    stacks: ["React", "TypeScript", "Styled-Component", "React Player"],
    isRight: false,
  },
];
