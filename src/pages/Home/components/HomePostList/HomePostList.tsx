import { useInView } from "framer-motion";

import "./HomePostList.style.css";

import { useEffect, useRef } from "react";

import { PostListItem } from "@/pages/Post/components/PostList/components";
import { PostData } from "@/types/original";

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
    <ul className="Home__post_list">
      {posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
        />
      ))}

      <li className="observe_container">
        <div
          ref={ref}
          className="observe_item"
        />
      </li>
    </ul>
  );
};

export default HomePostList;
