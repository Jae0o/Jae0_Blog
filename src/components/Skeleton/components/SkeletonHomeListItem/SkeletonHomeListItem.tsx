import Skeleton from "../../Skeleton";
import * as S from "./SkeletonHomeListItem.style";

const SkeletonHomeListItem = () => {
  return (
    <S.SkeletonHomeListItemLayout>
      <Skeleton
        width="28rem"
        height="21rem"
      />

      <Skeleton
        width="28rem"
        height="3.2rem"
        radius="0.6rem"
      />
      <Skeleton
        width="28rem"
        height="6rem"
        radius="0.8rem"
      />
    </S.SkeletonHomeListItemLayout>
  );
};

export default SkeletonHomeListItem;
