import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
       "h-11 w-full min-w-0 rounded-xl border border-border/70 bg-card/60 px-4 text-sm text-foreground backdrop-blur-md transition-all duration-200 outline-none shadow-sm placeholder:text-muted-foreground/80 hover:border-primary/20 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20",
        className
      )}
      {...props} />
  );
}

export { Input }
