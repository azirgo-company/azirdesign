import React from 'react'

interface CouponTypeFieldProps {
  value: 'FREE' | 'PAID'
}

const CouponTypeField: React.FC<CouponTypeFieldProps> = ({ value }) => {
  return <span>{value === 'FREE' ? 'Gratis' : 'Pago'}</span>
}

export default CouponTypeField
