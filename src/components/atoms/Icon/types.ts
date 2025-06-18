import React from "react";
export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconProps = {
  /** Any SVG React component (from react-feather, lucide-react, etc.) */
  icon: Icon;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
};
