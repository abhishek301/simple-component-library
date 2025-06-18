// components/atoms/Link.tsx
import { forwardRef } from "react";
import { LinkProps } from "./types";
import { combineClassNames } from "../../../utils/combineClassNames";

const variantClasses = {
  default: "text-dark hover:text-primary visited:text-muted",
  secondary: "text-primary hover:text-dark visited:text-muted",
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      children,
      variant = "default",
      external = false,
      underline = true,
      className = "",
      disabled = false,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Automatically detect external links if not explicitly set
    const isExternal =
      external || href.startsWith("http") || href.startsWith("//");

    // Set appropriate target and rel attributes for external links
    const linkTarget = target || (isExternal ? "_blank" : undefined);
    const linkRel = rel || (isExternal ? "noopener noreferrer" : undefined);

    const classes = combineClassNames([
      variantClasses[variant],
      underline && "underline",
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-muted rounded",
      className,
    ]);

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={linkTarget}
        rel={linkRel}
        className={classes}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
