import { BANNER_ITEM_LIST } from "@/constants";

import * as S from "./HomeBanners.style";
import { HomeBannerItem } from "./components";

const HomeBanners = () => {
  return (
    <S.HomeBannersLayout>
      {BANNER_ITEM_LIST.map(
        ({ thumbnail, title, description, isRight, stacks }) => (
          <HomeBannerItem
            key={title}
            thumbnail={thumbnail}
            title={title}
            description={description}
            stacks={stacks}
            isRight={isRight}
          />
        ),
      )}
    </S.HomeBannersLayout>
  );
};

export default HomeBanners;
