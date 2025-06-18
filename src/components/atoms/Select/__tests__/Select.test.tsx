import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "../Select";
import { SelectOption } from "../types";
import { Hexagon } from "react-feather";

const options: SelectOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2", icon: <Hexagon data-testid="icon-2" /> },
];

describe("Select", () => {
  it("renders with default placeholder", () => {
    render(<Select options={options} />);
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<Select options={options} placeholder="Choose an option" />);
    expect(screen.getByText("Choose an option")).toBeInTheDocument();
  });

  it("opens and displays options when clicked", () => {
    render(<Select options={options} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("selects an option and closes the list", () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 2"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith("2");
  });

  it("does not open when disabled", () => {
    render(<Select options={options} disabled />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("renders icons when provided", () => {
    render(<Select options={options} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("icon-2")).toBeInTheDocument();
  });

  it("has correct accessibility attributes", () => {
    render(<Select options={options} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-haspopup", "listbox");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByText("Option 1"));
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
