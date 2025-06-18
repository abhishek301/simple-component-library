import { Icon } from "../Icon/types";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "inverted"
  | "muted";
export type ButtonSize = "sm" | "md";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  customSize?: string;
  iconLeft?: Icon;
  iconRight?: Icon;
  className?: string;
}
