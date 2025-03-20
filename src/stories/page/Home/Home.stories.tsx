import HomePage from "@/app/(WithMenubar)/(Home)/page";
import { TanstackProvider } from "@/app/_components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Home Page
 *
 * Home Route에서 사용되어지는 페이지입니다. <br>
 *
 * 내부에서 <br>
 *
 * - HomeTitle
 * - HomeBannerList
 * - HomePostList
 *
 * 각 컴포넌트를 사용합니다. <br>
 *
 * */
const meta = {
  title: "Page/Home",
  component: HomePage,
  parameters: {
    layout: "centered",
  },

  decorators: [
    Storybook => (
      <TanstackProvider>
        <Storybook />
      </TanstackProvider>
    ),
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
