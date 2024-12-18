import { AsideProfile } from "@/lib/container/server/AsideBar/components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## AsideProfile Component
 *
 * AsideBar 내부 Profile 영역에서 사용되어지는 AsideProfile Component입니다. <br>
 * 내부에는 `<AsideProfileTitle />` `<AsideProfileButton />` 컴포넌트가 사용되어집니다.

 *
 * <br>
 *
 * ```tsx
 * import { AsideProfile } from "";
 *
 * return <AsideProfile />
 * ```
 * */
const meta = {
  title: "Containers/AsideBar/components/Profile",
  component: AsideProfile,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AsideProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
