"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"
import { Moon, Coffee, House } from "lucide-react"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }

export default function VibeToggle() {
  const [mode, setMode] = useState("dark");

  const handleToggle = () => {
    const nextMode = mode === "dark" ? "coffee" : mode === "coffee" ? "cozy" : "dark";
    setMode(nextMode);
    document.body.className = nextMode; // Apply the mode as a class to the body
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "inline-flex items-center gap-2 p-2 rounded-full border",
        "bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600"
      )}
      aria-label="Toggle mode"
    >
      {mode === "dark" && (
        <>
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Dark</span>
        </>
      )}
      {mode === "coffee" && (
        <>
          <Coffee className="h-5 w-5 text-brown-700 dark:text-brown-300" />
          <span className="text-sm text-brown-700 dark:text-brown-300">Coffee</span>
        </>
      )}
      {mode === "cozy" && (
        <>
          <House className="h-5 w-5 text-pink-700 dark:text-pink-300" />
          <span className="text-sm text-pink-700 dark:text-pink-300">Cozy</span>
        </>
      )}
    </button>
  );
}
