import { Suspense } from "react";

import { HomePostList } from "@/app/(Home)/_containers";
import { TanstackProvider } from "@/app/_components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## HomePostList Component
 *
 * Home 페이지에서 사용되는 HomePostList 입니다. <br>
 *
 * HomePostItem Component를 이용해 제작하였습니다. <br>
 *
 * Tanstack Query와 Firebase DB를 이용하여 게시물 목록을 가져오고 있습니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { HomePostList } from "";
 *
 * return <HomePostList />
 * ```
 * */
const meta = {
  title: "Page/Home/containers/HomePostList",
  component: HomePostList,
  parameters: {
    layout: "centered",
  },

  decorators: [
    Storybook => {
      return (
        <TanstackProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Storybook />
          </Suspense>
        </TanstackProvider>
      );
    },
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof HomePostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
