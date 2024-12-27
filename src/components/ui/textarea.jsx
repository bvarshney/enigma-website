import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "bg-transparent border-b border-gray focus:border-black w-full focus:ring-0 focus:outline-none py-2 px-2 placeholder:font-body placeholder:font-medium font-heading tablet:text-2xl mobile:text-xl",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
