import React, { useEffect, useState } from 'react'
import './ThemeToggle.css'
import Moon from '../Icons/Moon'
import Sun from '../Icons/Sun'
import { useModalContext } from '../../Context'

type Props = {
  isVisible: boolean
}

export default function ThemeToggle({ isVisible }: Props) {

  const { theme, setTheme } = useModalContext()

  const themeColourTag = document.getElementById('theme-color') as HTMLMetaElement

  const setDefaultTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      sessionStorage.setItem("theme", "light")
      themeColourTag.content = "#F2F6FA"
    }
    else {
      setTheme('dark')
      sessionStorage.setItem("theme", "dark")
      themeColourTag.content = "#1D1E1F"
    }
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      themeColourTag.content = "#1D1E1F"
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      themeColourTag.content = "#F2F6FA"
    }
  }, [theme])

  useEffect(() => {
    let storageTheme = sessionStorage.getItem('theme') as 'dark' | 'light' | null
    if (storageTheme === null) return setDefaultTheme()
    setTheme(storageTheme)
  }, [])

  return (
    <div className='ThemeToggle__Main' onClick={toggleTheme} style={{ display: isVisible ? "flex" : 'none' }}>

      <div className='ThemeToggle__Blur' />

      <div className={'ThemeToggle__Switch ' + (theme === 'dark' ? "ThemeToggle__Switch__Left" : "ThemeToggle__Switch__Right")} />

      <div className={`ThemeToggle__Option ` + (theme !== 'dark' ? "ThemeToggle__Option__Unselected" : '')}>
        <Moon color={'var(--main-text-colour'} width='20px' height='20px' />
      </div>

      <div className={`ThemeToggle__Option ` + (theme !== 'light' ? "ThemeToggle__Option__Unselected" : '')}>
        <Sun color={'var(--main-text-colour)'} width='20px' height='20px' />
      </div>
    </div>
  )
}
