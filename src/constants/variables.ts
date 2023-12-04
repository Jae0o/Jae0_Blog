import { PostDataType } from "../Types/Components/Edit/EditorTypes";
import { AdviceListType, AdviceType } from "../Types/Constants/VariablesType";

export const NEW_POST: PostDataType = {
  id: "newPost",
  createAt: "",
  updateAt: "",
  title: "",
  subtitle: "",
  main: "## 본문 없음",
  isPublic: true,
  category: "",
  tag: [],
};

export const ADVICE_DEFAULT: AdviceType = {
  advice: "Software, like entropy, tends to increase over time.",
  author: "Boyle's Law of Software Evolution",
};

export const ADVICE_LIST: AdviceListType = [
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
