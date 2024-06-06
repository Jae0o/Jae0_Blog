import * as S from "./HomeBannerItem.styles";

interface HomeBannerItemProps {
  thumbnail: string;
  title: string;
  description: string;
  stacks: string[];
  isRight: boolean;
}

const HomeBannerItem = ({
  thumbnail,
  title,
  description,
  stacks,
  isRight,
}: HomeBannerItemProps) => {
  return (
    <S.HomeBannerLayout
      $isRight={isRight}
      whileHover={{
        scale: 1.06,
      }}
    >
      <S.HomeBannerItemImage src={thumbnail} />

      <S.HomeBannerInfo>
        <S.HomeBannerTitle>{title}</S.HomeBannerTitle>
        <S.HomeBannerDescription>{description}</S.HomeBannerDescription>

        <S.HomeBannerStackList>
          {stacks.map(stack => (
            <S.HomeBannerStackItem
              $stack={stack}
              key={stack}
            >
              {stack}
            </S.HomeBannerStackItem>
          ))}
        </S.HomeBannerStackList>
      </S.HomeBannerInfo>
    </S.HomeBannerLayout>
  );
};

export default HomeBannerItem;
