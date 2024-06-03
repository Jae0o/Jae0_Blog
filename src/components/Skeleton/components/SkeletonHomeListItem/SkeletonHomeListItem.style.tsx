import styled from "styled-components";

import { SkeletonBeforeStyle } from "../../Skeleton.style";

export const SkeletonHomeListItemLayout = styled.li`
  width: 32rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonHomeListItemThumbnailContainer = styled.div`
  width: 28rem;
  height: 21rem;

  ${SkeletonBeforeStyle}
`;

export const SkeletonHomeListItemTitle = styled.h2`
  width: 28rem;
  height: 6rem;

  ${SkeletonBeforeStyle}
`;

export const SkeletonHomeListItemTagList = styled.ul`
  width: 100%;
  height: 3.2rem;

  ${SkeletonBeforeStyle}
`;
