import { combineClassNames } from "../../../utils/combineClassNames";
import { Icon } from "../Icon";
import { SearchInputProps } from "./types";

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  icon,
  className,
  ...props
}) => {
  return (
    <div className={combineClassNames("relative w-full max-w-md", className)}>
      <input
        type="text"
        placeholder={placeholder}
        className={combineClassNames(
          "w-full rounded-full px-4 py-2 text-body text-dark placeholder-muted border border-gray-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted focus-visible:ring-offset-1 transition",
          icon ? "pr-10" : ""
        )}
        {...props}
      />
      {icon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
          <Icon icon={icon} size={16} />
        </div>
      )}
    </div>
  );
};
