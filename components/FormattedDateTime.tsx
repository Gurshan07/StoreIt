import { cn, formatDateTime } from '@/lib';
import React from 'react'

const FormattedDateTime = ({date}: {date: string; className?: string}) => {
  return <p className={cn(
    "body-1 text-light-200, className"
  )}>{formatDateTime(date)}</p>
}

export default FormattedDateTime
