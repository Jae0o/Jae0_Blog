import "./PostDetailInfo.style.css";

import { PostData } from "@/types/original";

import {
  PostDetailCategory,
  PostDetailTags,
  PostDetailTime,
} from "./components";

interface PostDetailInfoProps {
  post: PostData;
}

const PostDetailInfo = ({ post }: PostDetailInfoProps) => {
  return (
    <div className="ptdetail__info">
      <PostDetailTime
        title={"생성 일시"}
        time={post.createAt}
      />

      <PostDetailTime
        title={"변경 일시"}
        time={post.updateAt}
      />

      <PostDetailCategory category={post.category} />

      <PostDetailTags tags={post.tag} />
    </div>
  );
};

export default PostDetailInfo;
