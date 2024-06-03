import { useNavigate } from "react-router-dom";

import { PostData } from "@/types/original";
import { convertDateFormat } from "@/util";

import * as S from "./HomeListItem.style";

interface HomeListItemProps {
  post: PostData;
}

const HomeListItem = ({ post }: HomeListItemProps) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/post/detail/${post.id}`);
  };

  return (
    <S.HomeListItemLayout
      onClick={onNavigate}
      whileHover={{
        scale: 1.1,
      }}
    >
      <S.HomeListItemThumbnailContainer>
        <S.HomeListItemThumbnail
          src={post.thumbnail}
          alt={`post thumbnail ${post.title}`}
          sizes="28rem 21rem"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <S.HomeListItemCreateAt>
          {convertDateFormat(JSON.parse(post.createAt))}
        </S.HomeListItemCreateAt>

        <S.HomeListItemCategory>{post.category}</S.HomeListItemCategory>
      </S.HomeListItemThumbnailContainer>

      <S.HomeListItemTitle>{post.title}</S.HomeListItemTitle>

      <S.HomeListItemTagList>
        {post.tag.map(tag => (
          <S.HomeListItemTag>{tag}</S.HomeListItemTag>
        ))}
      </S.HomeListItemTagList>
    </S.HomeListItemLayout>
  );
};

export default HomeListItem;
