import React from 'react'
import './ThemeToggle.css'
import Moon from '../Icons/Moon'
import Sun from '../Icons/Sun'

type Props = {
    theme: 'dark' | 'light',
    toggleTheme: () => void,
    isVisible: boolean
}

export default function ThemeToggle({ theme, toggleTheme, isVisible }: Props) {
    return (
        <div className='ThemeToggle__Main' onClick={toggleTheme} style={{ display: isVisible ? "flex" : 'none' }}>

            <div className='ThemeToggle__Blur' />
            
            <div className={'ThemeToggle__Switch ' + (theme === 'dark' ? "ThemeToggle__Switch__Left" : "ThemeToggle__Switch__Right")} />

            <div className={`ThemeToggle__Option ` + (theme !== 'dark' ? "ThemeToggle__Option__Unselected" : '') }>
                <Moon color={'var(--main-text-colour'} width='20px' height='20px' />
            </div>

            <div className={`ThemeToggle__Option ` + (theme !== 'light' ? "ThemeToggle__Option__Unselected" : '') }>
                <Sun color={'var(--main-text-colour)'} width='20px' height='20px' />
            </div>
        </div>
    )
}
