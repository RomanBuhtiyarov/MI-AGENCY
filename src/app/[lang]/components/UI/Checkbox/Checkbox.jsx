import { cn } from "@/_helpers/cn";
import React from "react";

export const Checkbox = ({ className, checked, ...props }) => {
  return <input {...props} checked={checked} type='radio' className={cn(className)} />;
};
