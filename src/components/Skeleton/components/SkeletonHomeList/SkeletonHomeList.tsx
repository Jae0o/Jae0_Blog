import SkeletonHomeListItem from "../SkeletonHomeListItem/SkeletonHomeListItem";
import * as S from "./SkeletonHomeList.style";

const SkeletonHomeList = () => {
  return (
    <S.SkeletonHomeListLayout>
      <SkeletonHomeListItem />
      <SkeletonHomeListItem />
      <SkeletonHomeListItem />
      <SkeletonHomeListItem />
      <SkeletonHomeListItem />
      <SkeletonHomeListItem />
    </S.SkeletonHomeListLayout>
  );
};

export default SkeletonHomeList;
