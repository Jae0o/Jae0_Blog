import { ScrollProgressBar } from "@/lib/container/server/Frame/MainFrame/components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## ScrollProgressBar Component
 *
 * MainFrame에서 사용되어지는 ScrollProgressBar 입니다.<br>
 *
 * 모든 페이지에서 상단에 나타나며 스크롤 진행 비율을 나타냅니다. <br>
 * MainFrame Component 내부에서 `<ScrollProgress />` Component를 이용하여 구현하였습니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { ScrollProgressBar } from "";
 *
 * return <ScrollProgressBar />
 * ```
 * */
const meta = {
  title: "Components/ScrollProgressBar",
  component: ScrollProgressBar,
  parameters: {
    layout: "centegray",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    Storybook => {
      return (
        <div
          id="main_frame"
          className="w-[80rem] h-[60rem] p-[1rem] border-[0.2rem] flex flex-col gap-4 border-gray_500 rounded-12 overflow-scroll"
        >
          <Storybook />

          <div className="w-full min-h-[50rem] bg-gray-100 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-200 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-300 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-400 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-500 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-600 rounded-8" />
          <div className="w-full min-h-[50rem] bg-gray-700 rounded-8" />
        </div>
      );
    },
  ],
};
