import React from 'react'

const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <div className="title-logo">
          <p className="web-title">Wr.</p>
          <i className="web-logo fa-solid fa-pen-nib"></i>
        </div>
        <div className="nav-items">
          <div className="hamburger-items">
            <i className="close-icon fa-solid fa-xmark"></i>
            <ul>
              <li><a href="https://www.google.com">About Us</a></li>
              <li><a href="https://www.google.com">Our Works</a></li>
              <li><a href="https://www.google.com">Our Partners</a></li>
              <li><a href="https://www.google.com">Contact Us</a></li>
            </ul>
          </div>
          <i className="hamburger-bar fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header