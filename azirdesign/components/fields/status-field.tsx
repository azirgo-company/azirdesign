import { ProcessStatus } from "@/src/graphql/schema.types"
import { Badge } from "./components/ui/badge"
import {
  getBranchStatusLabel,
  getBranchStatusColor,
} from "@/src/lib/hooks/use-get-label"

interface StatusFieldProps {
  value: ProcessStatus
}

export default function StatusField({ value }: StatusFieldProps) {
  return (
    <Badge className={getBranchStatusColor(value)}>
      {getBranchStatusLabel(value)}
    </Badge>
  )
}
