import React from 'react'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <div className="title-logo">
          <p className="web-title">Wr.</p>
          <i className="web-logo fa-solid fa-pen-nib"></i>
        </div>
        <NavItems />
      </nav>
    </header>
  )
}

export default Header