export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The URL or path to link to */
  href: string;
  /** Content to display inside the link */
  children: React.ReactNode;
  /** Visual variant of the link */
  variant?: "default" | "secondary";
  /** Whether the link should open in a new tab */
  external?: boolean;
  /** Whether to show underline */
  underline?: boolean;
  /** Custom className to extend styles */
  className?: string;
  /** Whether the link is disabled */
  disabled?: boolean;
}
