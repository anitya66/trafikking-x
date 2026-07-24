import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";

import { cn } from "@/lib/utils";

function Menu({
  ...props
}) {
  return (
    <MenuPrimitive.Root
      data-slot="menu"
      {...props}
    />
  );
}

function MenuTrigger({
  className,
  ...props
}) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

function MenuContent({
  className,
  children,
  side = "bottom",
  sideOffset = 8,
  align = "end",
  alignOffset = 0,
  ...props
}) {
  return (
    <MenuPrimitive.Portal>

      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="z-50"
      >

        <MenuPrimitive.Popup
          data-slot="menu-content"
          className={cn(
            "z-50 min-w-64 overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-2xl ring-1 ring-black/5 outline-none",
            "origin-(--transform-origin)",
            "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            "transition-all duration-150",
            className
          )}
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>

      </MenuPrimitive.Positioner>

    </MenuPrimitive.Portal>
  );
}

function MenuLabel({
  className,
  ...props
}) {
  return (
    <div
      data-slot="menu-label"
      className={cn(
        "px-3 py-2",
        className
      )}
      {...props}
    />
  );
}

function MenuItem({
  className,
  children,
  ...props
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground",
        "outline-none",
        className
      )}
      {...props}
    >
      {children}
    </MenuPrimitive.Item>
  );
}

function MenuSeparator({
  className,
  ...props
}) {
  return (
    <div
      data-slot="menu-separator"
      className={cn(
        "my-1 h-px bg-border",
        className
      )}
      {...props}
    />
  );
}

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
};