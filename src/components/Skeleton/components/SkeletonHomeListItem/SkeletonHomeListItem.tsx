import * as S from "./SkeletonHomeListItem.style";

const SkeletonHomeListItem = () => {
  return (
    <S.SkeletonHomeListItemLayout>
      <S.SkeletonHomeListItemThumbnailContainer />

      <S.SkeletonHomeListItemTitle />
      <S.SkeletonHomeListItemTagList />
    </S.SkeletonHomeListItemLayout>
  );
};

export default SkeletonHomeListItem;
