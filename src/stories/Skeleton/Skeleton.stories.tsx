import { Skeleton } from "@/lib/components/server";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Skeleton Ui Component
 *
 * Skeleton UI를 편하게 만들어 사용할 수 있도록 구현한 Skeleton Component입니다.<br>
 * `Tailwind`를 기준으로 제작하여 className을 통해 Custom이 가능합니다.<br>
 *
 * ### 사용 방법
 *
 * - **className**에 `tailwind` 문법을 전달하여 상황에 맞게 Custom하여 사용
 *
 * <br>
 *
 * ```tsx
 * import { Skeleton } from "@/lib/components/server";
 *
 * return (
 *  <Skeleton
 *    className="w-[10rem] h-[10rem] rounded-[1.2rem]"
 *  />
 * )
 * ```
 *
 * ### Props
 *
 * - **className ?**<br>
 *   `string`를 전달해 스타일을 지정합니다.
 *
 * ### type
 *
 * - **className ?** : `string`
 * */
const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {
    className: "w-[10rem] h-[10rem] rounded-[1.2rem]",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
