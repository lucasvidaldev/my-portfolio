import './Header.css'
import NavMenu from './NavMenu'

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">lucas gonçalves</h1>
      <NavMenu />
    </header>
  )
}

export default Header