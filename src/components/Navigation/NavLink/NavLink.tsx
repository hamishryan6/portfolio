import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './NavLink.css'

type Props = {
    to: string;
    label: string;
}

export default function NavLink({ to, label }: Props ) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
  return (
    <Link to={resolvedPath} className={'Nav__Link ' + ( isActive ? 'Nav__Link__Selected' : '')}>{label}</Link>
  )
}
