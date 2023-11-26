import React, { useEffect } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './NavLink.css'

type Props = {
    to: string;
    label: string;
}

export default function NavLink({ to, label }: Props) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0 });
    }

    useEffect(() => {
        scrollToTop()
    }, [resolvedPath])


    return (
        <Link to={resolvedPath} onClick={() => scrollToTop()} className={'Nav__Link ' + (isActive ? 'Nav__Link__Selected' : '')}>{label}</Link>
    )
}
