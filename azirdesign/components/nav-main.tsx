"use client"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: any
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <div>
      <div>Navigation Main</div>
      {/* Add more UI as needed */}
    </div>
  )
}
