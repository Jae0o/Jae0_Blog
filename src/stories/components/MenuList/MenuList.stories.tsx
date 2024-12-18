import { MenuList } from "@/lib/components/server";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## MenuList Component
 *
 * AsideBar NavBar에서 사용되어지는 MenuList 입니다.<br>
 * 내부에서 `<MenuItem />` Component를 이용하여 구현하였습니다. <br>

 * <br>
 *
 * ```tsx
 * import { MenuList } from "";
 *
 * return <ContactMeButton />
 * ```
\
 * */
const meta = {
  title: "Components/MenuList",
  component: MenuList,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
