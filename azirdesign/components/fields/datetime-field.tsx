import { format as formatDate, formatDistanceToNow, parseISO } from 'date-fns'

import { es } from 'date-fns/locale'

interface DatetimeFieldProps {
  value: string // ISO date string
  format: string // date-fns format string
  relative?: boolean // If true, show relative time
}

// This component formats a date string using date-fns and a provided format, always in Spanish
const DatetimeField: React.FC<DatetimeFieldProps> = ({ value, format, relative }) => {
  let formatted = ''
  try {
    const date = parseISO(value)
    if (relative) {
      formatted = formatDistanceToNow(date, { locale: es, addSuffix: true })
    } else {
      formatted = formatDate(date, format, { locale: es })
    }
  } catch {
    formatted = value // fallback to raw value if parsing fails
  }
  return <span>{formatted}</span>
}

export default DatetimeField
