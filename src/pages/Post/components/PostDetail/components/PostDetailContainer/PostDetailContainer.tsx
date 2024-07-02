import { useScroll } from "framer-motion";

import { useContext, useRef } from "react";

import { ContextAuthUser } from "@/Context/ContextAuthUser";
import { PostBanner, ProgressBar } from "@/components";
import { PostData } from "@/types/original";

import * as S from "./PostDetailContainer.style";
import { PostAuthAction, PostDetailInfo, PostDetailViewer } from "./components";

interface PostDetailContainerProps {
  id: string;
  postData: PostData;
}

const PostDetailContainer = ({ id, postData }: PostDetailContainerProps) => {
  const { isAuthUser } = useContext(ContextAuthUser);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <S.PostDetailContainer ref={ref}>
      <ProgressBar scrollYProgress={scrollYProgress} />

      <PostBanner
        thumbnail={postData.thumbnail}
        mainText={postData.title}
        height={50}
        objectFit={"contain"}
      />

      <S.PostDetailContent data-color-mode="light">
        <PostDetailInfo post={postData} />

        <S.PostDetailDivider />

        <PostDetailViewer content={postData.main} />

        <S.PostDetailDivider />

        {isAuthUser && (
          <>
            <PostAuthAction postId={id} />
            <S.PostDetailDivider />
          </>
        )}
      </S.PostDetailContent>
    </S.PostDetailContainer>
  );
};

export default PostDetailContainer;
