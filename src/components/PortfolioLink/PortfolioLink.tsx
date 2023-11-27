import React from 'react'
import './PortfolioLink.css'
import Link from '../Icons/Link'
import GitHub from '../Icons/Github'
import Globe from '../Icons/Globe'
import AppStore from '../Icons/AppStore'

type Props = {
    label: string
    link: string
}

export default function PortfolioLink({ label, link }: Props) {

    const renderIcon = () => {
        switch (label) {
            case 'GitHub': return <GitHub height='24px' />
            case 'App Store': return <AppStore height='16px' />
            default: return <Globe height='20px' />
        }
    }

    return (
        <a className='PortfolioLink__Main' href={link} target="_blank" >
            {renderIcon()}
            {label}
            <Link height='12px' />
        </a>
    )
}
