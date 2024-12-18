import { AsideProfileButton } from "@/lib/container/server/AsideBar/components/AsideProfile/components";
import { ASIDE_ACTIONS } from "@/lib/container/server/AsideBar/constants";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## AsideProfileButton Component
 *
 * AsideBar 내부 Profile 영역에서 사용되어지는 AsideProfileButton Component입니다. <br>
 * 내부에는 `Home`, `Search`, `Write` 페이지로 이동하기 위한 기능이 제공됩니다.

 *
 * <br>
 *
 * ```tsx
 * import { AsideProfileButton } from "@/lib/components/client";
 *
 * return ( 
 *  <AsideProfileButton 
 *    path="경로"
 *    Icon={<IconComponent />}
 *    action="search | home | write"
 *  />
 * )
 * ```
 * 
 * <br>
 * 
 * ### Props & Type
 *
 * - **action**<br>
 *   `search` | `home` | `write` 중 하나의 액션 타입을 전달 받아 색상을 변경합니다.
 *
 * - **path**<br>
 *   Button 클릭 시 이동할 route 경로를 전달 받습니다. ( 내부 상수 값 활용 )
 * 
 * - **Icon**<br>
 *   Button 내부 Icon을 전달 받습니다.
 * */
const meta = {
  title: "Components/AsideBar/Profile/Button",
  component: AsideProfileButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    action: {
      description:
        "`search` | `home` | `write` 중 하나의 액션 타입을 전달 받아 색상을 변경합니다.",
      control: { type: "radio" },
    },
    path: {
      description:
        "Button 클릭 시 이동할 route 경로를 전달 받습니다. ( 내부 상수 값 활용 )",
      control: { disable: true },
    },
    Icon: {
      description: "Button 내부 Icon을 전달 받습니다.",
      control: { disable: true },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AsideProfileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    Icon: ASIDE_ACTIONS[0].Icon,
    path: "",
    action: ASIDE_ACTIONS[0].action,
  },
};

export const Write: Story = {
  args: {
    Icon: ASIDE_ACTIONS[1].Icon,
    path: "",
    action: ASIDE_ACTIONS[1].action,
  },
};

export const Home: Story = {
  args: {
    Icon: ASIDE_ACTIONS[2].Icon,
    path: "",
    action: ASIDE_ACTIONS[2].action,
  },
};
