import { PostData } from "../../../../../../API/Firebase.Types";
import PostDetailCategory from "./Components/PostDetailCategory/PostDetailCategory";
import PostDetailTags from "./Components/PostDetailTag/PostDetailTags";
import PostDetailTime from "./Components/PostDetailTime/PostDetailTime";
import "./PostDetailContent.Styles.css";

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

      <span className="ptdetail__info-divider" />

      <PostDetailTime
        title={"변경 일시"}
        time={post.updateAt}
      />

      <span className="ptdetail__info-divider" />

      <PostDetailCategory category={post.category} />

      <span className="ptdetail__info-divider" />

      <PostDetailTags tags={post.tag} />
    </div>
  );
};

export default PostDetailInfo;
