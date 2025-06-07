import { IconProps } from "./types";

export const Icon = ({
  icon: IconComponent,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...rest
}: IconProps) => {
  return (
    <IconComponent
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      {...rest}
    />
  );
};
