import { AsideBar } from "@/lib/container/server";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## AsideBar Component
 *
 * 모든 페이지에서 보여지는 AsideBar 입니다. <br>
 * 사용자의 브라우저 창의 크기가 넓은 경우 화면에 나타나게 됩니다.
 *
 * <br>
 *
 * ```tsx
 * import { AsideBar } from "@/lib/components/client";
 *
 * return <AsideBar />
 * ```
 *
 * <br>
 *
 * - 현재 `1050px` 보다 브라우저의 창이 큰 경우 나타나게 됩니다.
 * */
const meta = {
  title: "Containers/AsideBar",
  component: AsideBar,
  parameters: {
    layout: "centered",
  },

  decorators: StoryComponent => {
    return (
      <div
        style={{
          width: "80rem",
          height: "90rem",
        }}
      >
        <StoryComponent />
      </div>
    );
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AsideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
