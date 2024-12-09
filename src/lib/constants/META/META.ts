const META_SITE_NAME = "Jae0's Blog";

const META_COMMON_IMAGE = new URL(
  "https://res.cloudinary.com/dya70nmfp/image/upload/v1720707563/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.13.25_lc13ib.png",
);
const META_COMMON_KEYWORDS = [
  "frontend",
  "프론트엔드",
  "dev",
  "developer",
  "개발자",
  "develop",
  "개발",
  "react",
  "리액트",
  "javascript",
  "자바스크립트",
  "typescript",
  "타입스크립트",
  "next",
  "next.js",
  "넥스트",
  "css",
  "masilgasil",
  "마실가실",
  "Project",
  "프로젝트",
  "개인프로젝트",
  "blog",
  "블로그",
];

const CREATOR = "Jae0";
const BASE_URL = new URL("https://www.jae0.co.kr/");

export const STATIC_META_DATA = {
  HOME: {
    title: META_SITE_NAME,
    description:
      "FrontEnd 개발자의 나만의 도화지 Blog! 프론트엔드 개발자 이재영",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
    creator: CREATOR,
    url: BASE_URL,
  },
};

export type StaticMetaKey = keyof typeof STATIC_META_DATA;
