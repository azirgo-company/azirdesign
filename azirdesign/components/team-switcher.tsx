"use client"

import * as React from "react"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <div>
      <div>Active Team: {activeTeam.name}</div>
      {/* Add more UI as needed */}
    </div>
  )
}
