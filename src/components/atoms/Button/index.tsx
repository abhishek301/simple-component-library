// src/components/ui/Button.tsx
import React from "react";
import { combineClassNames } from "../../../utils/combineClassNames";
import { ButtonProps, ButtonVariant, ButtonSize } from "./types";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-white hover:text-primary",
  secondary: "bg-dark text-white hover:bg-muted",
  white: "bg-white text-dark hover:bg-gray-mid",
  inverted: "bg-gray-mid text-dark hover:bg-dark hover:text-white",
  muted: "bg-gray-mid text-muted cursor-not-allowed",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-subbody px-3 py-1.5",
  md: "text-body px-4 py-2",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  customSize,
  iconLeft,
  iconRight,
  disabled,
  className = "",
  ...props
}) => {
  const isDisabled = disabled || variant === "muted";

  const baseClasses =
    "inline-flex items-center gap-2 rounded-full transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted focus-visible:ring-offset-2";

  const finalClassName = combineClassNames(
    baseClasses,
    variantClasses[variant],
    customSize || sizeClasses[size],
    isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className
  );

  return (
    <button className={finalClassName} disabled={isDisabled} {...props}>
      {iconLeft && <span className="inline-flex">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex">{iconRight}</span>}
    </button>
  );
};
