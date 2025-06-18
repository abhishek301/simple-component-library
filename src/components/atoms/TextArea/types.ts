export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Placeholder text */
  placeholder?: string;
  /** Number of visible text lines */
  rows?: number;
  /** Whether the TextArea is disabled */
  disabled?: boolean;
  /** Whether to allow resizing */
  resize?: "none" | "vertical" | "horizontal" | "both";
  /** Whether the field is required */
  required?: boolean;
  /** Custom className to extend styles */
  className?: string;
  /** Character count limit */
  maxLength?: number;
  /** Whether to show character count */
  showCharacterCount?: boolean;
}
