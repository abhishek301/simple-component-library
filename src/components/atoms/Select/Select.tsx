import React, { useState } from "react";
import { combineClassNames } from "../../../utils/combineClassNames";
import { SelectProps, SelectOption } from "./types";
import { Icon } from "../Icon";

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select",
  onChange,
  disabled = false,
  className = "",
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(null);

  const toggleOpen = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className={combineClassNames("relative inline-block w-48", className)}>
      <button
        type="button"
        onClick={toggleOpen}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={combineClassNames(
          "w-full rounded-full bg-white border text-left flex items-center justify-between px-4 py-2 transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted focus-visible:ring-offset-2",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <span>{selected?.label || placeholder}</span>
        {icon && <Icon icon={icon} size={16} />}
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-2 rounded-[18px] bg-white shadow focus-visible:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-lighter cursor-pointer"
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
