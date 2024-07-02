import { useScroll } from "framer-motion";
import { useTheme } from "styled-components";

import React, { Suspense, useRef } from "react";

import { ProgressBar, Skeleton } from "@/components";

import * as S from "./Home.style";
import { HomeBanners, HomePostList } from "./components";

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
