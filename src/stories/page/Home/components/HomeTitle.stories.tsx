import { AsideBar } from "@/lib/container/server";

import { HomeTitle } from "@/app/(Home)/_components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## HomeTitle Component
 *
 * Home 페이지에서 사용되는 HomeTitle 입니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { HomeTitle } from "";
 *
 * return <HomeTitle />
 * ```
 * */
const meta = {
  title: "Page/Home/components/HomeTitle",
  component: HomeTitle,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HomeTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
