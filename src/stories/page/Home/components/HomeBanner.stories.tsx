import { HOME_BANNER_LIST } from "@/app/(WithMenubar)/(Home)/_constants";
import { HomeBanner } from "@/app/(WithMenubar)/(Home)/_containers/HomeBannerList/components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## HomeBanner Component
 *
 * Home 페이지에서 사용되는 HomeBanner 입니다. <br>
 *
 * HomeBannerList Container 제작에 사용 되어집니다. <br>
 *
 * Banner Click시 관련 게시물 목록으로 이동합니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { HomeBannerList } from "";
 *
 * return (
 *  <HomeBanner
 *    thumbnail={thumbnail}
 *    title={title}
 *    description={description}
 *    stacks={stacks}
 *    isRight={isRight}
 *    path={path}
 *  />
 * )
 * ```
 *
 * ### Props & Type
 *
 * - **thumbnail**<br>
 *   Banner에 사용되어지는 썸네일 이미지 URL을 전달 받습니다.
 *
 * - **title**<br>
 *   Banner에 사용되어지는 제목을 전달 받습니다.
 *
 * - **description**<br>
 *   Banner에 사용되어지는 설명명을 전달 받습니다.
 *
 * - **stacks**<br>
 *   Banner에 사용되어지는 기술 스택을 전달 받습니다.
 *
 * - **isRight**<br>
 *   Banner가 보여질 위치가 오른쪽인지 왼쪽인지 전달 받습니다.
 *
 * - **path**<br>
 *   Banner 클릭 시 이동할 url을 전달 받습니다.
 * */
const meta = {
  title: "Page/Home/components/HomeBanner",
  component: HomeBanner,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    thumbnail: {
      description: "Banner에 사용되어지는 썸네일 이미지 URL을 전달 받습니다.",
      control: { disable: true },
    },

    title: {
      description: "Banner에 사용되어지는 제목을 전달 받습니다.",
    },

    description: {
      description: "Banner에 사용되어지는 설명명을 전달 받습니다.",
    },

    stacks: {
      description: "Banner에 사용되어지는 기술 스택을 전달 받습니다.",
      control: { disable: true },
    },

    isRight: {
      description: "Banner가 보여질 위치가 오른쪽인지 왼쪽인지 전달 받습니다.",
    },

    path: {
      description: "Banner 클릭 시 이동할 url을 전달 받습니다.",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HomeBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog: Story = {
  args: {
    thumbnail: HOME_BANNER_LIST[0].thumbnail,
    title: HOME_BANNER_LIST[0].title,
    description: HOME_BANNER_LIST[0].description,
    stacks: HOME_BANNER_LIST[0].stacks,
    isRight: HOME_BANNER_LIST[0].isRight,
    path: HOME_BANNER_LIST[0].path,
  },
};

export const MasilGasil: Story = {
  args: {
    thumbnail: HOME_BANNER_LIST[1].thumbnail,
    title: HOME_BANNER_LIST[1].title,
    description: HOME_BANNER_LIST[1].description,
    stacks: HOME_BANNER_LIST[1].stacks,
    isRight: HOME_BANNER_LIST[1].isRight,
    path: HOME_BANNER_LIST[1].path,
  },
};

export const Yap: Story = {
  args: {
    thumbnail: HOME_BANNER_LIST[2].thumbnail,
    title: HOME_BANNER_LIST[2].title,
    description: HOME_BANNER_LIST[2].description,
    stacks: HOME_BANNER_LIST[2].stacks,
    isRight: HOME_BANNER_LIST[2].isRight,
    path: HOME_BANNER_LIST[2].path,
  },
};
