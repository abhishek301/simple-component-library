import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextArea } from "..";

describe("TextArea", () => {
  it("renders with default placeholder", () => {
    render(<TextArea />);
    expect(
      screen.getByPlaceholderText("Enter your text...")
    ).toBeInTheDocument();
  });

  it("renders with custom placeholder and rows", () => {
    render(<TextArea placeholder="Your message" rows={10} />);
    const textarea = screen.getByPlaceholderText("Your message");
    expect(textarea).toHaveAttribute("rows", "10");
  });

  it("disables textarea when `disabled` prop is true", () => {
    render(<TextArea disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  it("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<TextArea value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies the correct resize class based on `resize` prop", () => {
    const { rerender } = render(<TextArea resize="none" />);
    expect(screen.getByRole("textbox").className).toContain("resize-none");

    rerender(<TextArea resize="vertical" />);
    expect(screen.getByRole("textbox").className).toContain("resize-y");

    rerender(<TextArea resize="horizontal" />);
    expect(screen.getByRole("textbox").className).toContain("resize-x");

    rerender(<TextArea resize="both" />);
    expect(screen.getByRole("textbox").className).toContain("resize");
  });
});
