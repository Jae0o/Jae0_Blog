import { HomeBannerList } from "@/app/(Home)/_containers";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## HomeBannerList Component
 *
 * Home 페이지에서 사용되는 HomeBannerList 입니다. <br>
 *
 * HomeBanner Component를 이용해 제작하였습니다. <br>
 *
 * - Blog 제작기
 * - MasilGasil 프로젝트
 * - Yap 프로젝트
 *
 * 각 목록에 대한 Banner를 제공합니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { HomeBannerList } from "";
 *
 * return <HomeBannerList />
 * ```
 * */
const meta = {
  title: "Page/Home/containers/HomeBannerList",
  component: HomeBannerList,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HomeBannerList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
