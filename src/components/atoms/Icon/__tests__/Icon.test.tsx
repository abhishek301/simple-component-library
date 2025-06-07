import React from "react";
import { render } from "@testing-library/react";
import { Icon } from "..";
import { User } from "react-feather";

describe("Icon Component", () => {
  it("renders with default props", () => {
    const { container } = render(<Icon icon={User} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("stroke", "currentColor");
    expect(svg).toHaveAttribute("stroke-width", "2");
  });

  it("applies custom size and color", () => {
    const { container } = render(<Icon icon={User} size={32} color="red" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("stroke", "red");
  });

  it("applies custom class name", () => {
    const { container } = render(<Icon icon={User} className="custom-class" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("custom-class");
  });
});
