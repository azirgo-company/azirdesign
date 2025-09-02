import React from 'react'

export interface PaymentFieldProps {
  type?: string | null
  className?: string
}

// Shows payment type as human-readable string
const PaymentField: React.FC<PaymentFieldProps> = ({ type, className }) => {
  let label = ''
  if (type === 'BANK_TRANSFER') {
    label = 'Transferencia'
  } else if (type === 'NUVEI') {
    label = 'Tarjeta'
  } else {
    label = type || ''
  }

  return <span className={className}>{label}</span>
}

export default PaymentField
