"use client"

interface NavUserProps {
  className?: string
}
export function NavUser({ className }: NavUserProps) {
  return (
    <div className={className}>
      <div>User Menu</div>
      {/* Add more UI as needed */}
    </div>
  )
}
