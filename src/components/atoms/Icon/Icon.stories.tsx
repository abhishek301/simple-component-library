import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";
import { User, Heart } from "react-feather";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: User,
  },
};

export const HeartIcon: Story = {
  args: {
    icon: Heart,
    color: "red",
    size: 32,
  },
};

export const CustomClass: Story = {
  args: {
    icon: User,
    className: "text-blue-500",
  },
};
