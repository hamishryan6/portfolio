import './Navigation.css'
import NavLink from './NavLink/NavLink'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Navigation() {
    return (
        <div className='Nav__Main'>
            <div className='Nav__Links'>
                <NavLink to={'/'} label='Home' />
                <NavLink to={'/portfolio'} label='Portfolio' />
            </div>
            <ThemeToggle/>
        </div>
    )
}
