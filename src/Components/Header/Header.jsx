import { useAuthContext } from '../../Hooks/useAuthContext'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  // BEM para llamar clases
  return (
    <nav className="header">
      <NavLink className="header__logo" to="">LOGO </NavLink>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/">Home</NavLink>
        </li>
        <li className="header__list-item">
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/dashboard">Dashboard</NavLink>
        </li>

        {isAuth ? (
          <>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/secret">Secret</NavLink>
            </li>
            <li className='header__list-item'>
              <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">Login</NavLink>
            </li>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">Signup</NavLink>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default Header
