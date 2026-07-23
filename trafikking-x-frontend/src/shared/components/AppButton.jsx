import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AppButton = forwardRef(
  (
    {
      children,
      loading = false,
      loadingText = "Loading...",
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "transition-default",
          "gap-2",
          "font-medium",
          "shadow-sm",
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </Button>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;