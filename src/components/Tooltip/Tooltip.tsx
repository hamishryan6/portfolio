import React from 'react'
import './Tooltip.css'

type Props = {
  label: string
  isPersistant?: boolean
}

export default function Tooltip({ label, isPersistant }: Props) {
  return (
    <div className={'Tooltip__Main' + (isPersistant ? ' PersistantTooltip': '')}>{label}</div>
  )
}
