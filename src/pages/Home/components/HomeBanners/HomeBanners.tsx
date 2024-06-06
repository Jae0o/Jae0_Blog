import TEST from "@/assets/banner/Thumnail.png";

import * as S from "./HomeBanners.style";
import { HomeBannerItem } from "./components";

const HomeBanners = () => {
  return (
    <S.HomeBannersLayout>
      <HomeBannerItem
        thumbnail={TEST}
        title="블로그 제작 과정"
        description="dsadas"
        stacks={["React", "TypeScript", "Firebase", "Framer-motion"]}
        isRight={false}
      />
      <HomeBannerItem
        thumbnail={TEST}
        title="블로그 제작 과정"
        description="dsadas"
        stacks={["React", "TypeScript", "Firebase", "Framer-motion"]}
        isRight={true}
      />
      <HomeBannerItem
        thumbnail={TEST}
        title="블로그 제작 과정"
        description="dsadas"
        stacks={["React", "TypeScript", "Firebase", "Framer-motion"]}
        isRight={false}
      />
    </S.HomeBannersLayout>
  );
};

export default HomeBanners;
