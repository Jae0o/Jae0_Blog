import { PostData } from "@/types/original";
import { convertDateFormat } from "@/util";

import * as S from "./HomeListItem.style";

interface HomeListItemProps {
  post: PostData;
}

const HomeListItem = ({ post }: HomeListItemProps) => {
  return (
    <S.HomeListItemLayout>
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
      </S.HomeListItemThumbnailContainer>
    </S.HomeListItemLayout>
  );
};

export default HomeListItem;
