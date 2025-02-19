import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type = "password", ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      type={showPassword ? "text" : type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      suffix={
        showPassword ? (
          <EyeIcon
            className="select-none"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeOffIcon
            className="select-none"
            onClick={() => setShowPassword(true)}
          />
        )
      }
      ref={ref}
      {...props}
    />
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
