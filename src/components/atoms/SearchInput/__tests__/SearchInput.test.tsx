import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchInput } from "..";
import { Search } from "react-feather";

describe("SearchInput", () => {
  it("renders with default placeholder", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<SearchInput placeholder="Find something..." />);
    const input = screen.getByPlaceholderText("Find something...");
    expect(input).toBeInTheDocument();
  });

  it("applies custom className to wrapper div", () => {
    render(<SearchInput className="custom-class" />);
    const wrapper = screen.getByRole("textbox").parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("does not render icon when not passed", () => {
    render(<SearchInput />);
    const icon = screen.queryByTestId("search-icon");
    expect(icon).not.toBeInTheDocument();
  });

  it("adds padding-right when icon is present", () => {
    render(<SearchInput icon={Search} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("pr-10");
  });

  it("does not add padding-right when icon is not present", () => {
    render(<SearchInput />);
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveClass("pr-10");
  });

  it("passes additional props to input", () => {
    render(<SearchInput aria-label="custom" />);
    const input = screen.getByLabelText("custom");
    expect(input).toBeInTheDocument();
  });
});
