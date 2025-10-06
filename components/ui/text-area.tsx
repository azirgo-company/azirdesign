import * as React from "react"
import { cn } from "../../src/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  const [value, setValue] = React.useState(props.value ?? "")
  const maxLength = props.maxLength as number | undefined

  React.useEffect(() => {
    setValue(props.value ?? "")
  }, [props.value])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    props.onChange?.(event)
  }

  return (
    <div className="relative w-full">
      <textarea
        data-slot="textarea"
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        onChange={handleChange}
        {...props}
      />
      {typeof maxLength === "number" && (
        <span className="text-muted-foreground absolute right-2 bottom-[-22px] bg-transparent px-1 text-xs">
          {value?.toString().length}/{maxLength}
        </span>
      )}
    </div>
  )
}

export { Textarea }
