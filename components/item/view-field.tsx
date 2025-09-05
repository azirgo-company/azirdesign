export function ViewField({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <div className="rounded-lg border p-3 text-sm dark:border-zinc-800">
      <div className="text-muted-foreground mb-1 text-xs font-medium tracking-wide uppercase">
        {label}
      </div>
      <div className="truncate">{value}</div>
    </div>
  )
}
