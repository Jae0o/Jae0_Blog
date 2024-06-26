import { useInView } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
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
  const [imageUrl, setImageUrl] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setImageUrl(post.miniThumbnail);
    }
  }, [isInView, post]);

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
          ref={ref}
          src={imageUrl}
          alt={`post thumbnail ${post.title}`}
          sizes="(max-width: 480px) 20rem, (min-width: 1050px) 16rem"
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
