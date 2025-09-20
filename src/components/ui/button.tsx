import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group relative overflow-hidden",
  {
    variants: {
      variant: {
        // Primary - Clean solid button with subtle shadow
        primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md active:bg-gray-900",
        // Secondary - Minimal outline with clean borders
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100",
        // Outline - Clean border-only design
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100",
        // Ghost - Minimal hover state
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200",
        // Destructive - Clean red variant
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md active:bg-red-800",
        // Success - Clean green variant
        success: "bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md active:bg-green-800",
        // Link - Minimal text link
        link: "text-gray-600 hover:text-gray-900 underline-offset-4 hover:underline p-0 h-auto font-normal",
        // Accent - Subtle accent color
        accent: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:bg-blue-800",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        default: "h-10 px-4 text-sm rounded-lg",
        lg: "h-11 px-6 text-base rounded-lg",
        xl: "h-12 px-8 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
