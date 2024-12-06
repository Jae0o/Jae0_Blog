import {
  BlueBookIcon,
  BrownBookIcon,
  CloseIcon,
  DisplayIcon,
  EmailIcon,
  ExtendContentIcon,
  GithubLogoIcon,
  GreenBookIcon,
} from "@/lib/components";

import { IconStoryBox } from "./components";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * **공통 Icon 컴포넌트 모음**
 *
 * 현재 Blog 에서 사용되어지는 Icon들을 한눈에 확인할 수 있습니다.
 *
 * ```tsx
 * import { SVGProps } from "react";
 *
 * export interface IconGlobalProps extends SVGProps<SVGSVGElement> {
 *   size?: string;
 *   fill?: string;
 * }
 * ```
 * - 모든 Icon은 SVG 형태로 구현 되어있습니다.
 * */
const meta = {
  title: "Icons/공통 아이콘 목록",
  component: IconStoryBox,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    children: {
      control: { disable: true },
      description: "Icon을 보여주기 위한 layout 용도 ( 실제 Component와 무관 )",
    },
  },
} satisfies Meta<typeof IconStoryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
};

export const BlueBook: Story = {
  args: {
    children: <BlueBookIcon />,
  },
};

export const BrownBook: Story = {
  args: {
    children: <BrownBookIcon />,
  },
};

export const GreenBook: Story = {
  args: {
    children: <GreenBookIcon />,
  },
};

export const Close: Story = {
  args: {
    children: <CloseIcon />,
  },
};

export const Display: Story = {
  args: {
    children: <DisplayIcon />,
  },
};

export const Email: Story = {
  args: {
    children: <EmailIcon />,
  },
};

export const ExtendContent: Story = {
  args: {
    children: <ExtendContentIcon />,
  },
};

export const GithubLogo: Story = {
  args: {
    children: <GithubLogoIcon />,
  },
};
