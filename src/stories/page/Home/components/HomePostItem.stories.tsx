import {
  HomePostItem,
  HomePostItemSkeleton,
} from "@/app/(WithMenubar)/(Home)/_containers/HomePostList/components";
import { POST_EXAMPLE } from "@/stories/constants";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## HomePostItem Component
 *
 * HomePostList 내부에서 사용되는 HomePostItem 입니다. <br>
 *
 * 게시물 데이터를 전달받아 Home 에서 보여지는 게시물 목록에 사용되어집니다. <br>
 *
 * 클릭 시 해당 게시물 페이지로 이동하게됩니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { HomePostItem } from "";
 *
 * return (
 *  <HomePostItem
 *    post={post}
 *  />
 * )
 * ```
 *
 * ### Props & Type
 *
 * - **post**<br>
 *   PostData Type에 해당하는 Post 데이터를 전달 받습니다.
 * */
const meta = {
  title: "Page/Home/components/HomePostItem",
  component: HomePostItem,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    post: {
      description: "PostData Type에 해당하는 Post 데이터를 전달 받습니다.",
      control: { disable: true },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HomePostItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: POST_EXAMPLE,
  },
};

export const Skeleton: Story = {
  args: {
    post: POST_EXAMPLE,
  },

  decorators: [
    () => {
      return <HomePostItemSkeleton />;
    },
  ],
};
