import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Import jest-dom matchers directly in tests that need them
import "@testing-library/jest-dom";
import { Button } from "..";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant styles correctly", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole("button");

    // Check if the button has the expected classes for secondary variant
    expect(button).toHaveClass(
      "font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-muted hover:bg-dark text-white px-4 py-2 text-base cursor-pointer"
    );
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");
  });

  it("renders with different sizes", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-lg");
  });
});
