import { IntroFlow } from "@/app/introduce/_containers";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## IntroFlow Component
 *
 * React Flow 라이브러리를 이용해 제작한 Component 입니다. <br>
 * 현재 블로그에서 사용한 Stack에 대한 Flow를 제공합니다. <br>
 *
 * <br>
 *
 * ```tsx
 * import { IntroFlow } from "";
 *
 * return <IntroFlow />
 * ```
 * */
const meta = {
  title: "Page/Intro/containers/IntroFlow",
  component: IntroFlow,
  parameters: {
    layout: "centered",
  },

  decorators: [
    Storybook => (
      <div className="w-[80rem] p-[3rem]">
        <Storybook />
      </div>
    ),
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof IntroFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
