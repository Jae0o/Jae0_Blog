import * as S from "./Skeleton.style";
import { SkeletonHomeList, SkeletonHomeListItem } from "./components";

interface SkeletonProps {
  width: string | number;
  height: string | number;

  radius?: string | number;
}

const Skeleton = ({ width, height, radius = "1.2rem" }: SkeletonProps) => {
  return (
    <S.SkeletonLayout
      $width={width}
      $height={height}
      $radius={radius}
    />
  );
};

export default Skeleton;

Skeleton.SkeletonHomeListItem = SkeletonHomeListItem;
Skeleton.SkeletonHomeList = SkeletonHomeList;
