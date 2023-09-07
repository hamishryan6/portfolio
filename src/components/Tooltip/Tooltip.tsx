import React from 'react'
import './Tooltip.css'

type Props = {
  label: string
  isPersistant?: boolean,
  parentIsClickable?: boolean
}

export default function Tooltip({ label, isPersistant, parentIsClickable }: Props) {
  return (
    <div className={'Tooltip__Main' + (isPersistant ? ' PersistantTooltip': '') + (parentIsClickable ? ' parentIsClickable': '')}>{label}</div>
  )
}
