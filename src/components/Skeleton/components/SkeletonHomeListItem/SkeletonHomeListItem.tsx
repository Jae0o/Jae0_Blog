import * as S from "./SkeletonHomeListItem.style";

const SkeletonHomeListItem = () => {
  return (
    <S.SkeletonHomeListItemLayout>
      <S.SkeletonHomeListItemThumbnailContainer />

      <S.SkeletonHomeListItemTagList />
      <S.SkeletonHomeListItemTitle />
    </S.SkeletonHomeListItemLayout>
  );
};

export default SkeletonHomeListItem;
