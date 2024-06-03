import React from "react";

import * as GS from "../../PostDetailInfo.style";
import * as S from "./PostDetailCategory.style";

interface PostDetailCategoryProps {
  category: string;
}

const PostDetailCategory = ({
  category,
}: PostDetailCategoryProps): React.ReactNode => {
  return (
    <S.DetailCategoryLayout>
      <GS.DetailInfoContentTitle>카테고리</GS.DetailInfoContentTitle>
      <S.DetailCategoryContent>{category}</S.DetailCategoryContent>
    </S.DetailCategoryLayout>
  );
};

export default PostDetailCategory;
