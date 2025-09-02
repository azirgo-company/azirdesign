import { Button } from "./components/ui/button"
import { CreditCardIcon } from "lucide-react"
import { useState } from "react"
import { MembershipDialog } from "../../dialog/membership-dialog"

type MembershipButtonProps = {
  recordItemId: string
  disabled?: boolean
  hidden?: boolean
  title?: string
  onClick?: () => void
}

export const MembershipButton = ({
  recordItemId,
  disabled = false,
  hidden = false,
  title = "Membresía",
  onClick,
  ...props
}: MembershipButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (hidden) return null
  if (!recordItemId) return null

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    setIsDialogOpen(true)
  }

  return (
    <>
      <Button
        title={title}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        <CreditCardIcon className="h-4 w-4" />
      </Button>

      <MembershipDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        userId={recordItemId}
      />
    </>
  )
}

MembershipButton.displayName = "MembershipButton"
