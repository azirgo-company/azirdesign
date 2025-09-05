import React from 'react'

interface DiscountTypeFieldProps {
  value: 'FIXED' | 'PERCENTAGE'
}

const DiscountTypeField: React.FC<DiscountTypeFieldProps> = ({ value }) => {
  return <span>{value === 'FIXED' ? 'Fijo' : 'Porcentaje'}</span>
}

export default DiscountTypeField
