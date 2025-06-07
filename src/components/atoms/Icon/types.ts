import React from "react";
export type IconProps = {
  /** Any SVG React component (from react-feather, lucide-react, etc.) */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
};
