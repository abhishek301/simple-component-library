import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from ".";
import { Search } from "react-feather";

const meta: Meta<typeof SearchInput> = {
  title: "Atoms/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const WithIcon: Story = {
  args: {
    placeholder: "Search something...",
    icon: Search,
  },
};

export const WithoutIcon: Story = {
  args: {
    placeholder: "No icon provided",
  },
};

export const CustomStyle: Story = {
  args: {
    placeholder: "Styled search input",
    icon: Search,
    className: "mt-4 mb-4",
  },
};
