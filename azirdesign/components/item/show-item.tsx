interface ShowItemProps {
  title: string
  value?: unknown // Hacer que value sea opcional
  children?: React.ReactNode
}

export const ShowItem = ({ title, value, children }: ShowItemProps) => {
  let displayValue: React.ReactNode

  // Manera segura de convertir el value a un tipo que React pueda renderizar
  if (value === null || value === undefined) {
    displayValue = '-'
  } else if (typeof value === 'boolean') {
    displayValue = value ? 'Yes' : 'No'
  } else {
    displayValue = String(value) // Asegura que cualquier valor se convierta a string
  }

  // Si hay children, se renderizan en lugar de displayValue
  return (
    <div className="flex flex-col items-center gap-2.5 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <div className="text-center text-base font-semibold text-gray-800">{title}</div>
      {children ? (
        children // Renderiza los children (si existen)
      ) : (
        <div className="text-gray-60 text-center text-sm break-words">{displayValue}</div> // Si no, renderiza value
      )}
    </div>
  )
}
