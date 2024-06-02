import React from "react";
import { useNavigate } from "react-router-dom";

import { PostData } from "@/types/original";
import { convertDateFormat } from "@/util";

import * as S from "./PostListItem.style";

interface PostListItemProps {
  post: PostData;
}

const PostListItem = ({ post }: PostListItemProps): React.ReactNode => {
  const formattedDate: string = convertDateFormat(JSON.parse(post.createAt));

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/post/detail/${post.id}`);
  };

  return (
    <S.PostItem
      onClick={onNavigate}
      whileHover={{
        boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.2)",
        filter: "brightness(90%)",
      }}
    >
      <S.PostItemThumbnailLayout>
        <S.PostItemThumbnail
          src={post.thumbnail}
          alt="post-item-Thumbnail"
        />
        <S.PostItemCreateAt>{formattedDate}</S.PostItemCreateAt>
      </S.PostItemThumbnailLayout>

      <S.PostItemInfoLayout>
        <S.PostItemTitle> {post.title}</S.PostItemTitle>
        <S.PostItemCategory>{post.category}</S.PostItemCategory>
        <S.PostItemTagList>
          {post.tag &&
            post.tag.map(tag => <S.PostItemTag key={tag}>{tag}</S.PostItemTag>)}
        </S.PostItemTagList>
      </S.PostItemInfoLayout>
    </S.PostItem>
  );
};

export default PostListItem;
