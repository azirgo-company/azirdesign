import { ProcessStatus } from "@/src/graphql/schema.types"
import { Badge } from "./components/ui/badge"
import {
  getBranchStatusLabel,
  getBranchStatusColor,
} from "@/src/lib/hooks/use-get-label"

interface BranchStatusFieldProps {
  value: ProcessStatus | undefined
}

export default function BranchStatusField({ value }: BranchStatusFieldProps) {
  if (!value) return null

  return (
    <Badge className={getBranchStatusColor(value)}>
      {getBranchStatusLabel(value)}
    </Badge>
  )
}
