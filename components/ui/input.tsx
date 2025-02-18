import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, ...props }, ref) => {
    return (
      <div className="flex gap-2 w-full px-2 items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md   px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
