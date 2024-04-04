import { FormProvider, useForm } from "react-hook-form";

import { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "@/components/client/TextInput";

const meta = {
  title: "Component/TextInput",
  component: TextInput,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  decorators: [
    Story => {
      const form = useForm();
      const { watch, getValues } = form;
      watch();

      return (
        <FormProvider {...form}>
          <Story />
          <p>{JSON.stringify(getValues())}</p>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    name: "Size_Medium",
    placeholder: "현재 사이즈 Medium",
  },
};

export const Large: Story = {
  args: {
    name: "Size-Large",
    placeholder: "현재 사이즈 Large",
    size: "lg",
    color: "yellow",
  },
};

export const Small: Story = {
  args: {
    name: "Size-Small",
    placeholder: "현재 사이즈 Small",
    size: "sm",
    color: "red",
  },
};

export const Tiny: Story = {
  args: {
    name: "Size-Tiny",
    placeholder: "현재 사이즈 Tiny",
    size: "xs",
    color: "naked",
  },
};
