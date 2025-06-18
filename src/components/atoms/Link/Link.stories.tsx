// components/atoms/Link.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { Icon } from "../Icon";
import { Link2 } from "react-feather";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible and accessible link component with multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the link",
    },
    href: {
      control: "text",
      description: "The URL or path to link to",
    },
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "danger"],
      description: "Visual variant of the link",
    },
    external: {
      control: "boolean",
      description: "Whether the link should open in a new tab",
    },
    underline: {
      control: "boolean",
      description: "Whether to show underline",
    },
    disabled: {
      control: "boolean",
      description: "Whether the link is disabled",
    },
    className: {
      control: "text",
      description: "Custom className to extend styles",
    },
  },
  args: {
    children: "Link Text",
    href: "#",
    variant: "default",
    external: false,
    underline: true,
    disabled: false,
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    children: "Default Link",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Link",
    href: "#",
    variant: "secondary",
  },
};

// States
export const WithoutUnderline: Story = {
  args: {
    children: "Link without underline",
    href: "#",
    underline: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Link",
    href: "#",
    disabled: true,
  },
};

export const External: Story = {
  args: {
    children: "External Link",
    href: "https://example.com",
    external: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "External links automatically open in a new tab with proper security attributes.",
      },
    },
  },
};

// Complex Content
export const WithComplexContent: Story = {
  render: () => (
    <Link href="#" className="inline-flex items-center space-x-2">
      <Icon icon={Link2} size={18} />
      <span>Link with icon</span>
    </Link>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Links can contain complex content including icons and multiple elements.",
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    children: "Custom Styled Link",
    href: "#",
    className: "font-bold text-purple-600 hover:text-purple-800",
    underline: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Custom styling can be applied using the className prop.",
      },
    },
  },
};

// Navigation Examples
export const NavigationExample: Story = {
  render: () => (
    <nav className="space-x-6">
      <Link href="/" variant="default">
        Home
      </Link>
      <Link href="/about" variant="default">
        About
      </Link>
      <Link href="/services" variant="default">
        Services
      </Link>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of using links in a navigation context.",
      },
    },
  },
};

// Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <p>
        This is a paragraph with an{" "}
        <Link href="#" variant="default">
          inline link
        </Link>{" "}
        that demonstrates proper focus states and accessibility.
      </p>
      <p>
        Here's a{" "}
        <Link href="#" disabled>
          disabled link
        </Link>{" "}
        that cannot be clicked.
      </p>
      <p>
        And here's an{" "}
        <Link href="https://example.com" external>
          external link
        </Link>{" "}
        that opens in a new tab.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates accessibility features including focus states, disabled state, and external link handling.",
      },
    },
  },
};
