import "./index.css";

export { Button } from "./components/atoms/Button";

export type { ButtonProps } from "./components/atoms/Button/types";

export { Icon } from "./components/atoms/Icon";
export { Link } from "./components/atoms/Link/Link";
export { SearchInput } from "./components/atoms/SearchInput/SearchInput";
export { Select } from "./components/atoms/Select/Select";
export { TextArea } from "./components/atoms/TextArea/TextArea";

// Export tailwind config for users who want to extend it
export { designSystemPreset } from "./tailwind-preset";
