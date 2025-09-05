import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"
import { Button } from "./components/ui/button"
import { useState } from "react"
import { useList, useCustomMutation, useInvalidate } from "@refinedev/core"
import {
  GET_PLANS_QUERY,
  ACTIVATE_MEMBERSHIP_WITH_CUSTOM_PLAN_MUTATION,
} from "@/src/modules/plan/query/plan"
import type { PlansQuery } from "@/src/graphql/types"

type MembershipDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  userId: string
}

export const MembershipDialog = ({
  isOpen,
  onOpenChange,
  userId,
}: MembershipDialogProps) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("")
  const invalidate = useInvalidate()

  const { data: plansData, isLoading } = useList<
    PlansQuery["plans"]["nodes"][0]
  >({
    resource: "plans",
    meta: {
      gqlQuery: GET_PLANS_QUERY,
    },

    sorters: [
      {
        field: "sortOrder",
        order: "asc",
      },
    ],
  })

  const { mutate: activateMembership, isLoading: isActivating } =
    useCustomMutation()

  const handleAccept = () => {
    if (selectedPlanId) {
      activateMembership(
        {
          url: "",
          method: "post",
          values: {
            planId: selectedPlanId,
            userId: userId,
          },
          meta: {
            gqlMutation: ACTIVATE_MEMBERSHIP_WITH_CUSTOM_PLAN_MUTATION,
            variables: {
              input: {
                planId: selectedPlanId,
                userId: userId,
              },
            },
          },
        },
        {
          onSuccess: () => {
            console.log("Plan ID:", selectedPlanId)
            console.log("User ID:", userId)
            console.log("Membership activated successfully!")

            // Refetch users list to show updated membership
            invalidate({
              resource: "users",
              invalidates: ["list"],
            })

            onOpenChange(false)
          },
          onError: (error) => {
            console.error("Error activating membership:", error)
          },
        }
      )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Membresía</DialogTitle>
          <DialogDescription>
            Selecciona un plan de membresía para el usuario ID: {userId}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Plan de Membresía
            </label>
            <Select
              value={selectedPlanId}
              onValueChange={setSelectedPlanId}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un plan" />
              </SelectTrigger>
              <SelectContent>
                {plansData?.data?.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id}>
                    {plan.name} - ${plan.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button
              onClick={handleAccept}
              disabled={!selectedPlanId || isLoading || isActivating}
            >
              {isActivating ? "Activando..." : "Aceptar"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
