import * as S from "./Home.style";
import { useTheme } from "styled-components";

import React, { Suspense, useRef } from "react";

import { MetaTag, ProgressBar, Skeleton } from "@/components";
import { META_DATA } from "@/constants";

import { HomeBanners, HomePostList } from "./components";

import { useScroll } from "framer-motion";

const Home = (): React.ReactNode => {
  const theme = useTheme();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <S.HomeLayout
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <MetaTag
        title={META_DATA.HOME.title}
        description={META_DATA.HOME.description}
        keywords={META_DATA.HOME.keywords}
        image={META_DATA.HOME.image}
      />

      <ProgressBar scrollYProgress={scrollYProgress} />

      <S.HomeTitleContainer>
        <S.HomeTitle
          whileHover={{
            color: theme.colors.yellow,
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          Jae0's Blog
        </S.HomeTitle>
      </S.HomeTitleContainer>

      <HomeBanners />

      <S.HomeSectionTitle>📝 게시물</S.HomeSectionTitle>

      <Suspense fallback={<Skeleton.SkeletonHomeList />}>
        <HomePostList />
      </Suspense>
    </S.HomeLayout>
  );
};

export default Home;
