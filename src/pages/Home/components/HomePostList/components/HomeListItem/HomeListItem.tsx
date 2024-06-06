import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostData } from "@/types/original";
import { convertDateFormat } from "@/util";

import * as S from "./HomeListItem.style";

interface HomeListItemProps {
  post: PostData;
}

const HomeListItem = ({ post }: HomeListItemProps) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  const onNavigate = () => {
    navigate(`/post/detail/${post.id}`);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setImageUrl(post.thumbnail);
    }
  }, [isInView, post]);

  return (
    <S.HomeListItemLayout
      onClick={onNavigate}
      whileHover={{
        scale: 1.1,
      }}
    >
      <S.HomeListItemThumbnailContainer>
        <S.HomeListItemThumbnail
          ref={ref}
          src={imageUrl}
          alt={`post thumbnail ${post.title}`}
          sizes="28rem 21rem"
          loading="lazy"
          decoding="async"
        />
        <S.HomeListItemCreateAt>
          {convertDateFormat(JSON.parse(post.createAt))}
        </S.HomeListItemCreateAt>

        <S.HomeListItemCategory>{post.category}</S.HomeListItemCategory>
      </S.HomeListItemThumbnailContainer>

      <S.HomeListItemTagList>
        {post.tag.map(tag => (
          <S.HomeListItemTag key={tag}>{tag}</S.HomeListItemTag>
        ))}
      </S.HomeListItemTagList>

      <S.HomeListItemTitle>{post.title}</S.HomeListItemTitle>
    </S.HomeListItemLayout>
  );
};

export default HomeListItem;
