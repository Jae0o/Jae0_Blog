import * as S from "./PostDetailContainer.style";

import { useRef } from "react";

import { MetaTag, PostBanner, ProgressBar } from "@/components";
import { useAuthStore } from "@/stores";
import { PostData } from "@/types/original";

import { PostAuthAction, PostDetailInfo, PostDetailViewer } from "./components";

import { useScroll } from "framer-motion";

interface PostDetailContainerProps {
  id: string;
  postData: PostData;
}

const PostDetailContainer = ({ id, postData }: PostDetailContainerProps) => {
  const { isAuthUser } = useAuthStore();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <S.PostDetailContainer ref={ref}>
      <ProgressBar scrollYProgress={scrollYProgress} />
      <MetaTag
        title={`${postData.title} - Jae0's Blog`}
        description="블로그 게시물"
        keywords={postData.tag}
        image={postData.thumbnail}
      />

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
