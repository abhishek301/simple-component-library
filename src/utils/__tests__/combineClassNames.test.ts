import { combineClassNames } from "../combineClassNames";

describe("combineClassNames", () => {
  it("joins simple string arguments", () => {
    expect(combineClassNames("btn", "primary", "active")).toBe(
      "btn primary active"
    );
  });

  it("ignores falsey values (false, null, undefined, 0)", () => {
    expect(combineClassNames("btn", false, null, undefined, "", 0)).toBe("btn");
  });

  it("handles numbers", () => {
    expect(combineClassNames(1, 2, "px")).toBe("1 2 px");
  });

  it("handles arrays of class names", () => {
    expect(combineClassNames(["btn", "active"])).toBe("btn active");
  });

  it("flattens nested arrays", () => {
    expect(combineClassNames(["btn", ["primary", ["rounded"]]])).toBe(
      "btn primary rounded"
    );
  });

  it("adds class names from objects with truthy values", () => {
    expect(combineClassNames({ btn: true, hidden: false, active: 1 })).toBe(
      "btn active"
    );
  });

  it("combines strings, objects, and arrays", () => {
    expect(
      combineClassNames("btn", { active: true, disabled: false }, [
        "rounded",
        { "bg-red": true },
      ])
    ).toBe("btn active rounded bg-red");
  });
  it("ignores symbol and function types", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(
      combineClassNames("btn", Symbol("sym") as any, (() => {}) as any)
    ).toBe("btn");
  });
});
