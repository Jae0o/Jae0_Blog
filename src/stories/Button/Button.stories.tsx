import { Button } from "@/lib/components/client";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Button Component
 *
 * 공용으로 사용되어지는 Button 입니다.<br>
 * 기본적으로 클릭시 물결 애니메이션이 동작하게됩니다.
 *
 * ### 사용 방법
 *
 * 일반 `button` tag와 동일하게 사용 가능합니다.
 *
 * <br>
 *
 * `handleShowModal`를 호출하여 Modal을 나타낼 수 있습니다.
 *
 * <br>
 *
 * ```tsx
 * import { Button } from "@/lib/components/client";
 *
 * return (
 *  // ... other components
 *
 *  <Button> Button </Button>
 *
 *  // ... other components
 * )
 * ```
 *
 * ### Props & Type
 *
 * HTMLButtonElement Props와 동일
 * */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    className: "bg-green_500 text-white_500",
  },
};
