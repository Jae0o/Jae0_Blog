import { HomeBannerList, HomeTitle } from "./_components";

const MainHome = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <HomeTitle />

      <HomeBannerList />
    </section>
  );
};

export default MainHome;
