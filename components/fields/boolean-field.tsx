import React from 'react'

interface BooleanFieldProps {
  value: boolean
}

// This component displays "Si" for true and "No" for false
const BooleanField: React.FC<BooleanFieldProps> = ({ value }) => {
  return <span>{value ? 'Si' : 'No'}</span>
}

export default BooleanField
