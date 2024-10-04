import * as S from "./HomeBanners.style";

import { BANNER_ITEM_LIST } from "@/constants";

import { HomeBannerItem } from "./components";

const HomeBanners = () => {
  return (
    <S.HomeBannersLayout>
      {BANNER_ITEM_LIST.map(
        ({ thumbnail, title, description, isRight, stacks, path }) => (
          <HomeBannerItem
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
    </S.HomeBannersLayout>
  );
};

export default HomeBanners;
