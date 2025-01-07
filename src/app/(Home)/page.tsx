import { Suspense } from "react";

import { HomeBannerList, HomePostList, HomeTitle } from "./_containers";

const MainHome = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <HomeTitle />

      <HomeBannerList />

      <Suspense fallback={<div>Loading...</div>}>
        <HomePostList />
      </Suspense>
    </section>
  );
};

export default MainHome;
