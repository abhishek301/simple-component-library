// utils/combineClassNames.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassValue[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { [key: string]: any };

export function combineClassNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    const type = typeof arg;

    if (type === "string" || type === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = combineClassNames(...arg);
      if (inner) classes.push(inner);
    } else if (type === "object") {
      for (const key in arg as object) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((arg as Record<string, any>)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}
