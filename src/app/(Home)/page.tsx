import { Suspense } from "react";

import {
  HomeBannerList,
  HomePostList,
  HomePostListSkeleton,
  HomeTitle,
} from "./_containers";

const MainHome = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <HomeTitle />

      <HomeBannerList />

      <Suspense fallback={<HomePostListSkeleton />}>
        <HomePostList />
      </Suspense>
    </section>
  );
};

export default MainHome;
