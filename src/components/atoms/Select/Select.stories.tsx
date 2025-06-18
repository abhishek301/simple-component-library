import { Select } from "./Select";
import { SelectOption } from "./types";
import {
  Hexagon,
  Scissors,
  Check,
  Star,
  Type,
  ChevronDown,
} from "react-feather";
import { Meta, StoryObj } from "@storybook/react";

const options: SelectOption[] = [
  { label: "Native", icon: <Hexagon size={16} />, value: "native" },
  { label: "Customization", icon: <Scissors size={16} />, value: "custom" },
  { label: "Checkmark", icon: <Check size={16} />, value: "checkmark" },
  { label: "Chip", icon: <Star size={16} />, value: "chip" },
  { label: "Placeholder", icon: <Type size={16} />, value: "placeholder" },
];

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  parameters: {
    layout: "centered",
  },
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    placeholder: "Select",
    icon: ChevronDown,
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    placeholder: "Disabled",
    icon: ChevronDown,
  },
};
