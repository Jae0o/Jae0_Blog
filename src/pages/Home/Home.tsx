import { useTheme } from "styled-components";

import React, { Suspense } from "react";

import * as S from "./Home.style";
import { HomePostList } from "./components";

const Home = (): React.ReactNode => {
  const theme = useTheme();

  return (
    <S.HomeLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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

      <Suspense fallback={<div>dddd</div>}>
        <HomePostList />
      </Suspense>
    </S.HomeLayout>
  );
};

export default Home;
