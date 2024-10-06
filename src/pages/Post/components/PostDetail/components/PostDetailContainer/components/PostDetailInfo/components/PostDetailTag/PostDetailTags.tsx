import * as GS from "../../PostDetailInfo.style";
import * as S from "./PostDetailTags.style";

import React from "react";

interface PostDetailTagsProps {
  tags: string[];
}

const PostDetailTags = ({ tags }: PostDetailTagsProps): React.ReactNode => {
  return (
    <S.DetailTagLayout>
      <GS.DetailInfoContentTitle>태그</GS.DetailInfoContentTitle>
      <S.DetailTagList>
        {tags &&
          tags.map(tag => <S.DetailTagItem key={tag}>{tag}</S.DetailTagItem>)}
      </S.DetailTagList>
    </S.DetailTagLayout>
  );
};

export default PostDetailTags;
