import { useInView } from "framer-motion";

import { useEffect, useRef } from "react";

import { PostListItem } from "@/pages/Post/components/PostList/components";
import { PostData } from "@/types/original";

import * as S from "./HomePostList.style";

interface HomePostListProps {
  posts: PostData[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const HomePostList = ({
  posts,
  fetchNextPage,
  hasNextPage,
}: HomePostListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isInView]);

  return (
    <S.HomePostList>
      {posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
        />
      ))}

      <S.ObserveContainer>
        <S.ObserveTarget ref={ref} />
      </S.ObserveContainer>
    </S.HomePostList>
  );
};

export default HomePostList;
