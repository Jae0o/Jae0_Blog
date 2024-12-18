import { ContactMeButton } from "@/lib/components/client";
import { AsideFooter } from "@/lib/components/client/AsideBar/components";
import { GithubLogoIcon } from "@/lib/components/server";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## AsideFooter Component
 *
 * AsideBar 내부에서 사용되어지는 Footer Component입니다. <br>
 * 내부에는 Github, Instagram, Email 발송을 할 수 있는 Contact 버튼이 존재합니다.
 *
 * <br>
 *
 * `<ContactMeButton />` 컴포넌트를 활용하여 제작 되었습니다.

 *
 * <br>
 *
 * ```tsx
 * import { AsideFooter } from "@/lib/components/client";
 *
 * return <AsideFooter />
 * ```
 * */
const meta = {
  title: "Components/AsideBar/Footer",
  component: AsideFooter,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AsideFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
