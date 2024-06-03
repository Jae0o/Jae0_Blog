import { PostData } from "@/types/original";

import * as S from "./PostDetailInfo.style";
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
    <S.DetailInfo>
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
    </S.DetailInfo>
  );
};

export default PostDetailInfo;
