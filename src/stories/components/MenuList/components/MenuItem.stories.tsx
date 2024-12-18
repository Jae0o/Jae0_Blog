import { MenuItem } from "@/lib/components/server/MenuList/components";

import { MENU_LIST } from "@/lib/constants";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## MenuItem Component
 *
 * MenuList에서 사용되어지는 Button 입니다.<br>
 * `Hover`에 대한 이벤트 애니메이션이 포함 되어있습니다. <br>
 *
 * 원하는 게시물 리스트로 이동하기 위한 목적의 `click` 동작이 포함 되어있습니다.
 *
 * ### 사용 방법
 *
 * 이동하고자 하는 category값을 전달 후 Item 클릭 시 자동적으로 게시물 목록으로 이동합니다.
 *
 * <br>
 *
 * ```tsx
 * import { MenuItem } from "";
 *
 * return (
 *  <MenuItem
 *    category={" ... 이동할 category"}
 *    Icon={<OtherIcon />}
 *    title="ItemName"
 *  />
 * )
 * ```
 *
 * ### Props & Type
 *
 * - **category**<br>
 *   Button 클릭 시 이동하고자 하는 게시물 목록록 category를 전달 받습니다.
 *
 * - **Icon**<br>
 *   Button 내부 Icon을 전달 받습니다.
 *
 * - **title**<br>
 *   Item 내부에서 보여질 게시물 목록 이름을 전달 받습니다.
 * */
const meta = {
  title: "Components/MenuList/components/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    category: {
      description:
        "Button 클릭 시 이동하고자 하는 게시물 목록록 category를 전달 받습니다.",
      control: { disable: true },
    },
    Icon: {
      description: "Button 내부 Icon을 전달 받습니다.",
      control: { disable: true },
    },
    title: {
      description: "Item 내부에서 보여질 게시물 목록 이름을 전달 받습니다.",
      control: "text",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog: Story = {
  args: {
    category: MENU_LIST[0].category,
    Icon: MENU_LIST[0].Icon,
    title: MENU_LIST[0].title,
  },
};

export const Yap: Story = {
  args: {
    category: MENU_LIST[1].category,
    Icon: MENU_LIST[1].Icon,
    title: MENU_LIST[1].title,
  },
};

export const MasilGasil: Story = {
  args: {
    category: MENU_LIST[2].category,
    Icon: MENU_LIST[2].Icon,
    title: MENU_LIST[2].title,
  },
};

export const Diary: Story = {
  args: {
    category: MENU_LIST[3].category,
    Icon: MENU_LIST[3].Icon,
    title: MENU_LIST[3].title,
  },
};

export const Frontend: Story = {
  args: {
    category: MENU_LIST[4].category,
    Icon: MENU_LIST[4].Icon,
    title: MENU_LIST[4].title,
  },
};
