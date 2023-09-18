import React from 'react'
import './Navigation.css'
import NavLink from './NavLink/NavLink'

export default function Navigation() {

    return (
        <nav className='Nav__Main'>
            <ul className='Nav__Links'>
                <NavLink to={'/'} label='Home' />
                <NavLink to={'/playground'} label='Playground' />
            </ul>
        </nav>
    )
}
