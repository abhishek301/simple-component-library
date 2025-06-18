import React from "react";
import { Icon } from "../Icon/types";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: Icon;
  className?: string;
}
