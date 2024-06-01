import "./HomePostList.style.css";

import { PostListItem } from "@/pages/Post/components/PostList/components";
import { PostData } from "@/types/original";

interface HomePostListProps {
  posts: PostData[];
}

const HomePostList = ({ posts }: HomePostListProps) => {
  return (
    <ul className="Home__post_list">
      {posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
        />
      ))}

      <div
        style={{ border: "1px solid red", width: "100%", height: "10rem" }}
      />
    </ul>
  );
};

export default HomePostList;
