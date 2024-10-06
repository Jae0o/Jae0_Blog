import * as S from "./Post.style";

import React from "react";
import { Outlet } from "react-router-dom";

const Post = (): React.ReactNode => {
  return (
    <S.PostLayout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.PostContainer>
        <Outlet />
      </S.PostContainer>
    </S.PostLayout>
  );
};

export default Post;
