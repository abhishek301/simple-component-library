// components/atoms/TextArea.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";
import { Button } from "../Button";

const meta = {
  title: "Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A clean and simple textarea component with essential functionality for text input.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed when the textarea is empty",
    },
    rows: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of visible text lines",
    },
    disabled: {
      control: "boolean",
      description: "Whether the TextArea is disabled",
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
      description: "Whether to allow resizing",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    maxLength: {
      control: { type: "number", min: 0, max: 1000 },
      description: "Character count limit",
    },
    showCharacterCount: {
      control: "boolean",
      description: "Whether to show character count",
    },
    className: {
      control: "text",
      description: "Custom className to extend styles",
    },
    value: {
      control: "text",
      description: "Current value of the textarea",
    },
  },
  args: {
    placeholder: "Enter your text...",
    rows: 6,
    disabled: false,
    resize: "none",
    required: false,
    showCharacterCount: false,
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: "Enter your text here...",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Enter your text...",
    value: "This is some sample text content in the textarea.",
  },
};

export const Required: Story = {
  args: {
    placeholder: "This field is required...",
    required: true,
  },
};

export const CustomRows: Story = {
  args: {
    placeholder: "This textarea has 3 rows...",
    rows: 3,
  },
};

export const LargeTextArea: Story = {
  args: {
    placeholder: "This is a larger textarea...",
    rows: 10,
  },
};

// State Stories
export const Disabled: Story = {
  args: {
    placeholder: "This field is disabled...",
    disabled: true,
    value: "This content cannot be edited",
  },
};

// Resize Options
export const ResizeVertical: Story = {
  args: {
    placeholder: "You can resize this vertically...",
    resize: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: "Drag the bottom-right corner to resize vertically",
      },
    },
  },
};

export const ResizeHorizontal: Story = {
  args: {
    placeholder: "You can resize this horizontally...",
    resize: "horizontal",
  },
  parameters: {
    docs: {
      description: {
        story: "Drag the bottom-right corner to resize horizontally",
      },
    },
  },
};

export const ResizeBoth: Story = {
  args: {
    placeholder: "You can resize this in both directions...",
    resize: "both",
  },
  parameters: {
    docs: {
      description: {
        story: "Drag the bottom-right corner to resize in any direction",
      },
    },
  },
};

// Character Count Stories
export const WithCharacterCount: Story = {
  args: {
    placeholder: "Tell us about yourself...",
    maxLength: 200,
    showCharacterCount: true,
  },
};

export const CharacterCountWithContent: Story = {
  args: {
    placeholder: "Type something...",
    maxLength: 100,
    showCharacterCount: true,
    value: "This is sample text to show the character counter.",
  },
};

export const CharacterLimitReached: Story = {
  args: {
    placeholder: "Brief description...",
    maxLength: 50,
    showCharacterCount: true,
    value: "This is a sample text that is exactly fifty ch",
  },
};

// Interactive Stories
export const InteractivePlayground: Story = {
  args: {
    placeholder: "Try different configurations...",
    resize: "none",
    showCharacterCount: false,
    maxLength: 500,
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls panel to experiment with different props.",
      },
    },
  },
};

// Controlled Component Example
export const ControlledExample: Story = {
  render: () => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="space-y-4">
        <TextArea
          placeholder="Type something here..."
          value={value}
          onChange={handleChange}
          showCharacterCount
          maxLength={100}
        />
        <p className="text-sm text-gray-600">Current value: "{value}"</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a controlled TextArea component.",
      },
    },
  },
};

// Form Integration Example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subject *
        </label>
        <TextArea
          id="subject"
          placeholder="Enter the subject..."
          required
          rows={2}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <TextArea
          id="message"
          placeholder="Enter your message..."
          required
          maxLength={500}
          showCharacterCount
          resize="vertical"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Additional Notes
        </label>
        <TextArea
          id="notes"
          placeholder="Any additional information..."
          rows={3}
        />
      </div>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of TextArea components used in a form context with labels.",
      },
    },
  },
};

// Custom Styling Example
export const CustomStyling: Story = {
  args: {
    placeholder: "Custom styled textarea...",
    className:
      "border-2 border-blue-300 focus-visible:border-blue-500 focus-visible:ring-blue-500",
  },
  parameters: {
    docs: {
      description: {
        story: "Example with custom styling using the className prop.",
      },
    },
  },
};

// Different Use Cases
export const CommentBox: Story = {
  args: {
    placeholder: "Write your comment here...",
    rows: 4,
    maxLength: 280,
    showCharacterCount: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Configured as a comment box with character limit.",
      },
    },
  },
};

export const FeedbackForm: Story = {
  args: {
    placeholder: "Please share your feedback...",
    rows: 8,
    resize: "vertical",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Configured as a feedback form with vertical resize.",
      },
    },
  },
};

export const CodeEditor: Story = {
  args: {
    placeholder: "Enter your code here...",
    rows: 12,
    resize: "both",
    className: "font-mono text-sm",
  },
  parameters: {
    docs: {
      description: {
        story: "Configured for code input with monospace font.",
      },
    },
  },
};

// Resize Showcase
export const ResizeShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">No Resize</h3>
        <TextArea placeholder="Cannot be resized..." resize="none" rows={4} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Vertical Resize
        </h3>
        <TextArea
          placeholder="Can be resized vertically..."
          resize="vertical"
          rows={4}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Horizontal Resize
        </h3>
        <TextArea
          placeholder="Can be resized horizontally..."
          resize="horizontal"
          rows={4}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Both Directions
        </h3>
        <TextArea
          placeholder="Can be resized in both directions..."
          resize="both"
          rows={4}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All resize options displayed together for comparison.",
      },
    },
  },
};

// Character Count Showcase
export const CharacterCountShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Without Character Count
        </h3>
        <TextArea placeholder="No character limit..." maxLength={100} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          With Character Count
        </h3>
        <TextArea
          placeholder="Shows character count..."
          maxLength={100}
          showCharacterCount
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Character Count with Content
        </h3>
        <TextArea
          placeholder="Pre-filled content..."
          maxLength={150}
          showCharacterCount
          value="This textarea has some pre-filled content to demonstrate the character counter."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different character count configurations.",
      },
    },
  },
};
