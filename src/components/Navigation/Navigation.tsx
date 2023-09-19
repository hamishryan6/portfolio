import React from 'react'
import './Navigation.css'
import NavLink from './NavLink/NavLink'

export default function Navigation() {

    return (
        <div className='Nav__Main'>
            <NavLink to={'/'} label='Home' />
            <NavLink to={'/playground'} label='Playground' />
            <div className='Nav__Blur' />
        </div>
    )
}
