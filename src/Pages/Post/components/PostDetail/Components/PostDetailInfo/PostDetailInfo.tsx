import "./PostDetailInfo.css";
import { PostData } from "@/types/original";
import PostDetailCategory from "./Components/PostDetailCategory/PostDetailCategory";
import PostDetailTags from "./Components/PostDetailTag/PostDetailTags";
import PostDetailTime from "./Components/PostDetailTime/PostDetailTime";

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
