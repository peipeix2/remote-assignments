import React, { useEffect, useState } from 'react'

const NavItems = () => {
  // if true, show dropdown
  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setDropDown(false)
      } 
    }
    window.addEventListener('resize', handleResize)
  })

  const handleDropdown = () => {
      setDropDown(true)
  }

  const handleCloseDropdown = () => {
    setDropDown(false)
  }
  

  return (
    <div className="nav-items">
      <div className={dropDown ? 'hamburger-items open' : 'hamburger-items'}>
        <i className="close-icon fa-solid fa-xmark" onClick={handleCloseDropdown}></i>
        <ul>
          <li><a href="https://www.google.com">About Us</a></li>
          <li><a href="https://www.google.com">Our Works</a></li>
          <li><a href="https://www.google.com">Our Partners</a></li>
          <li><a href="https://www.google.com">Contact Us</a></li>
        </ul>
      </div>
      <i className="hamburger-bar fa-solid fa-bars" onClick={handleDropdown}></i>
    </div>
  )
}

export default NavItems