import { AsideProfileTitle } from "@/lib/container/server/AsideBar/components/AsideProfile/components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## AsideProfileTitle Component
 *
 * AsideBar 내부 Profile 영역에서 사용되어지는 AsideProfileTitle Component입니다. <br>
 * Title `click` 시 Home 으로 이동하는 이벤트가 동작합니다.

 *
 * <br>
 *
 * ```tsx
 * import { AsideProfileTitle } from "";
 *
 * return <AsideProfileTitle />
 * ```
 * */
const meta = {
  title: "Containers/AsideBar/components/Profile/components/Title",
  component: AsideProfileTitle,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AsideProfileTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
