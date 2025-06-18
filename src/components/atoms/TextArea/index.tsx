// components/atoms/TextArea.tsx
import { forwardRef } from "react";
import { TextAreaProps } from "./types";
import { combineClassNames } from "../../../utils/combineClassNames";

// Default styling based on your original component
const defaultClasses = "p-6 text-body rounded-2xl";

const resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      placeholder = "Enter your text...",
      rows = 6,
      disabled = false,
      resize = "none",
      required = false,
      className = "",
      maxLength,
      showCharacterCount = false,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const currentLength = typeof value === "string" ? value.length : 0;
    const showCounter = showCharacterCount && maxLength;

    const baseClasses = [
      "w-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
      "border border-gray-300 bg-white focus-visible:ring-muted",
      defaultClasses,
      resizeClasses[resize],
    ];

    const stateClasses = [
      disabled && "opacity-50 cursor-not-allowed bg-gray-100",
      !disabled && "text-gray-900 placeholder-gray-500",
    ];

    const classes = combineClassNames([
      ...baseClasses,
      ...stateClasses,
      className,
    ]);

    return (
      <div className="w-full">
        <div className="relative">
          <textarea
            ref={ref}
            className={classes}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            {...props}
          />

          {showCounter && (
            <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-white px-2 py-1 rounded">
              {currentLength}
              {maxLength && `/${maxLength}`}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
