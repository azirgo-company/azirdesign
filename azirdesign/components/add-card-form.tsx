import React from "react"

// Minimal SDK typing to avoid `any` while still matching the runtime shape
interface PaymentGatewaySDK {
  generate_tokenize: (
    data: Record<string, unknown>,
    selector: string,
    responseCallback: (response: unknown) => void,
    notCompletedFormCallback?: (msg: string) => void
  ) => void
  tokenize: () => void
}

interface PaymentGatewayConstructor {
  new (env: string, client: string, key: string): PaymentGatewaySDK
}

declare const PaymentGateway: PaymentGatewayConstructor

interface CardCreateArgs {
  url: string
  method?: "post" | "get" | "put" | "delete"
  values?: Record<string, unknown>
  meta?: Record<string, unknown>
  config?: { headers?: Record<string, string> }
}

interface AddCardFormProps {
  user: { id: string; email: string }
}

export function AddCardForm({ user }: AddCardFormProps) {
  return (
    <div>
      <div>Add Card Form for user: {user.email}</div>
      {/* Add more UI as needed */}
    </div>
  )
}

export default AddCardForm
