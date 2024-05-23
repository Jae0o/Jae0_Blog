import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiReadCvLogo } from "react-icons/pi";
import { PiReadCvLogoFill } from "react-icons/pi";
// import { FaRegCalendarCheck } from "react-icons/fa6";
// import { PiReadCvLogoThin } from "react-icons/pi";
// import { PiReadCvLogoLight } from "react-icons/pi";
// import { PiReadCvLogoDuotone } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";

import { Advice, PostData } from "@/types/original";

import { CONTACT_ME_URL } from "../url/url";

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
  { url: CONTACT_ME_URL.GIT_HUB, Icon: FiGithub },
  { url: CONTACT_ME_URL.INSTAGRAM, Icon: FaInstagram },
  { url: CONTACT_ME_URL.EMAIL, Icon: MdOutlineEmail },
];

export const MENUBAR_LIST = [
  { title: "Blog 작업 기록", category: "BLOG", icon: PiReadCvLogoFill },
  { title: "Yap 기록", category: "YAP", icon: PiReadCvLogo },
  { title: "Masil Gasil 기록", category: "MASILGASIL", icon: PiReadCvLogoFill },
  { title: "회고 기록", category: "WORK", icon: FaBook },
  { title: "Frontend", category: "Frontend", icon: RiReactjsLine },
  // { title: "I Learn", category: "DIARY", icon: FaRegCalendarCheck },
];
