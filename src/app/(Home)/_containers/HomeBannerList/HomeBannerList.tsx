import { HOME_BANNER_LIST } from "../../_constants";
import { HomeBanner } from "./components";

import { twMerge } from "tailwind-merge";

const HomeBannerList = () => {
  return (
    <ul
      className={twMerge(
        "w-full py-[8rem] px-[4rem] flex flex-col items-center gap-[12rem]",
        "mobile:gap-[2rem] mobile:p-[2rem]",
      )}
    >
      {HOME_BANNER_LIST.map(
        ({ thumbnail, title, description, isRight, stacks, path }) => (
          <HomeBanner
            key={title}
            thumbnail={thumbnail}
            title={title}
            description={description}
            stacks={stacks}
            isRight={isRight}
            path={path}
          />
        ),
      )}
    </ul>
  );
};

export default HomeBannerList;
