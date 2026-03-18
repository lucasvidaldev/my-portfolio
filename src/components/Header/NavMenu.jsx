import { useState } from 'react'
import './NavMenu.css'

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <button 
        className={`nav__toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

<div className={`nav__overlay ${isOpen ? 'active' : ''}`}>


  <ul className="nav__menu">
    <li><a href="#">serviços</a></li>
    <li><a href="#">trabalhos</a></li>
    <li><a href="#">estudos</a></li>
    <li><a href="#">sobre mim</a></li>
    <li><a href="#">contato</a></li>
  </ul>

  <div className="nav__footer">
    <span>Junior Developer</span>
  </div>
</div>
    </nav>
  )
}

export default NavMenu