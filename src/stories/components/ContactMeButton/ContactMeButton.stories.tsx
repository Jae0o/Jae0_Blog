import { ContactMeButton } from "@/lib/components/client";
import { GithubLogoIcon } from "@/lib/components/server";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## ContactMeButton Component
 *
 * AsideBar NavBar에서 사용되어지는 Button 입니다.<br>
 * `Hover` `Tap` 에 대한 이벤트 애니메이션이 포함 되어있습니다.
 *
 * ### 사용 방법
 *
 * 이동하게 될 url props의 값에 url 및 동작을 전달합니다. <br>
 * 내부에 보여질 Icon을 전달합니다.
 *
 * <br>
 *
 * ```tsx
 * import { ContactMeButton } from "@/lib/components/client";
 *
 * return (
 *  <ContactMeButton
 *    url={" ... 이동할 url"}
 *    Icon={<OtherIcon />}
 *  />
 * )
 * ```
 *
 * ### Props & Type
 *
 * - **url**<br>
 *   Button 클릭 시 이동할 url을 전달 받습니다.
 *
 * - **Icon**<br>
 *   Button 내부 Icon을 전달 받습니다.
 * */
const meta = {
  title: "Components/ContactMeButton",
  component: ContactMeButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    url: {
      description: "Button 클릭 시 이동할 url을 전달 받습니다.",
    },
    Icon: {
      description: "Button 내부 Icon을 전달 받습니다.",
      control: { disable: true },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ContactMeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://github.com/Jae0o",
    Icon: <GithubLogoIcon />,
  },
};
