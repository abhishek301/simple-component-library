import { Icon } from "../Icon/types";

export type SelectOption = {
  label: string;
  icon?: React.ReactNode;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  icon?: Icon;
};
