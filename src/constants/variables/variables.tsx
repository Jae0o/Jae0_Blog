import React from "react";

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
