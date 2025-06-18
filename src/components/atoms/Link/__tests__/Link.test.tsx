import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from "..";

describe("Link component", () => {
  it("renders the link with default props", () => {
    render(<Link href="/home">Home</Link>);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveClass("text-dark");
    expect(link).toHaveClass("underline");
  });

  it("applies the secondary variant class", () => {
    render(
      <Link href="/about" variant="secondary">
        About
      </Link>
    );
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveClass("text-primary");
  });

  it("does not underline text when underline is false", () => {
    render(
      <Link href="/no-underline" underline={false}>
        No Underline
      </Link>
    );
    const link = screen.getByRole("link", { name: /no underline/i });
    expect(link).not.toHaveClass("underline");
  });

  it("detects and marks external links with target and rel", () => {
    render(<Link href="https://example.com">External</Link>);
    const link = screen.getByRole("link", { name: /external/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("respects explicitly passed target and rel", () => {
    render(
      <Link href="https://example.com" target="_self" rel="nofollow">
        Custom External
      </Link>
    );
    const link = screen.getByRole("link", { name: /custom external/i });
    expect(link).toHaveAttribute("target", "_self");
    expect(link).toHaveAttribute("rel", "nofollow");
  });

  it("forwards refs correctly", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Link href="/with-ref" ref={ref}>
        Ref Link
      </Link>
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it("appends custom className", () => {
    render(
      <Link href="/custom" className="custom-class">
        Custom
      </Link>
    );
    const link = screen.getByRole("link", { name: /custom/i });
    expect(link).toHaveClass("custom-class");
  });
});
