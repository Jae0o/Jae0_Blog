import BLOG_BANNER from "@/assets/banner/BLOG_THUMBNAIL.webp";
import MASILGASIL_BANNER from "@/assets/banner/MASIL_THUMBNAIL.webp";
import YAP_BANNER from "@/assets/banner/YAP_THUMBNAIL.webp";

export const META_SITE_NAME = "Jae0's Blog";
const META_COMMON_IMAGE =
  "https://res.cloudinary.com/dya70nmfp/image/upload/v1720707563/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.13.25_lc13ib.png";

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

export const META_DATA = {
  HOME: {
    title: META_SITE_NAME,
    description: "FrontEnd 개발자의 나만의 도화지 Blog!",
    keywords: META_COMMON_KEYWORDS,
    image: META_COMMON_IMAGE,
  },
  POST_LIST: {
    BLOG: {
      title: "블로그 제작기 - Jae0's Blog",
      description:
        "맨땅에서 React 하나만으로 블로그 만들기, 개선해 나가는 과정을 담은 이야기들",
      keywords: [
        ,
        ...META_COMMON_KEYWORDS,
        "redux",
        "리덕스",
        "saga",
        "사가",
        "블로그 만들기",
      ],
      image: BLOG_BANNER,
    },

    YAP: {
      title: "Yap! - Jae0's Blog",
      description:
        "내가 노래 추천해줄게 ~ Yap! 개발 과정 기록 & 회고 ( 프로그래머스 프론트엔드 데브코스 5기 진행 프로젝트 )",
      keywords: [
        ,
        ...META_COMMON_KEYWORDS,
        "노래",
        "팀프로젝트",
        "programmers",
        "데브코스",
        "프로그래머스",
      ],
      image: YAP_BANNER,
    },
    MASILGASIL: {
      title: "마실 가실? - Jae0's Blog",
      description:
        "새로운 산책을 하고 싶을 때, 마실 가실? 개발 과정 기록 & 회고 ( 프로그래머스 프론트엔드 데브코스 5기 진행 프로젝트 )",
      keywords: [
        ...META_COMMON_KEYWORDS,
        "산책",
        "산책 기록",
        "런닝",
        "running",
        "GPS",
        "GeoLocation",
        "팀프로젝트",
        "programmers",
        "데브코스",
        "프로그래머스",
      ],
      image: MASILGASIL_BANNER,
    },

    ALL: {
      title: "게시물 목록 - Jae0's Blog",
      description: "블로그 게시물 목록",
      keywords: [...META_COMMON_KEYWORDS],
      image: META_COMMON_IMAGE,
    },
  } as Record<
    string,
    {
      title: string;
      description: string;
      keywords: string[];
      image: string;
    }
  >,
};
