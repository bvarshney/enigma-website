import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "bg-transparent border-b border-gray focus:border-black w-full focus:ring-0 focus:outline-none py-2 px-2 placeholder:font-body placeholder:font-medium font-heading tablet:text-2xl mobile:text-xl",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
