import { HomeBannerList, HomeTitle } from "./_components";

const MainHome = () => {
  return (
    <section className="w-full h-full flex flex-col items-center overflow-scroll scrollbar-hide">
      <HomeTitle />

      <HomeBannerList />
    </section>
  );
};

export default MainHome;
