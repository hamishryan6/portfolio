import React, { useEffect, useState } from 'react'
import './ThemeToggle.css'
import { useModalContext } from '../../Context'
import MoonRegular from '../Icons/MoonRegular'
import SunRegular from '../Icons/SunRegular'
import SunSolid from '../Icons/SunSolid'
import MoonSolid from '../Icons/MoonSolid'

export default function ThemeToggle() {

  const { theme, setTheme } = useModalContext()

  const themeColourTag = document.getElementById('theme-color') as HTMLMetaElement

  const setDefaultTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setTheme('Dark')
    } else {
      setTheme('Light')
    }
  }

  const renderIcon = (icon: 'Moon' | 'Sun') => {
    switch (icon) {
      case 'Moon': switch (theme) {
        case 'Dark': return <MoonSolid fill={'var(--main-action-colour)'} width='100%' height='100%' />
        case 'Light': return <MoonRegular fill={'var(--main-text-colour'} width='100%' height='100%' />
      }
      case 'Sun': switch (theme) {
        case 'Light': return <SunSolid fill={'var(--main-action-colour)'} width='100%' height='100%' />
        case 'Dark': return <SunRegular fill={'var(--main-text-colour'} width='100%' height='100%' />
      }
    }
  }

  const toggleTheme = () => {
    if (theme === 'Dark') {
      setTheme('Light')
      localStorage.setItem("theme", "Light")
      themeColourTag.content = "#F2F6FA"
    }
    else {
      setTheme('Dark')
      localStorage.setItem("theme", "Dark")
      themeColourTag.content = "#1D1E1F"
    }
  }

  useEffect(() => {
    if (theme === 'Dark') {
      document.documentElement.classList.remove('Light')
      document.documentElement.classList.add('Dark')
      themeColourTag.content = "#1D1E1F"
    } else {
      document.documentElement.classList.remove('Dark')
      document.documentElement.classList.add('Light')
      themeColourTag.content = "#F2F6FA"
    }
  }, [theme])

  useEffect(() => {
    let storageTheme = localStorage.getItem('theme') as 'Dark' | 'Light' | null
    if (storageTheme === null) return setDefaultTheme()
    setTheme(storageTheme)
  }, [])

  return (
    <div className='ThemeToggle__Main'>

      <div
        className={`ThemeToggle__Container ${theme === 'Dark' && 'ThemeToggle__Container__Selected'}`}
        onClick={theme === 'Light' ? () => toggleTheme() : () => null}
      >
        {renderIcon('Moon')}
      </div>

      <div
        className={`ThemeToggle__Container ${theme === 'Light' && 'ThemeToggle__Container__Selected'}`}
        onClick={theme === 'Dark' ? () => toggleTheme() : () => null}
      >
        {renderIcon('Sun')}
      </div>

      <div className={`ThemeToggle_Selection__${theme}`} />

    </div>
  )
}
