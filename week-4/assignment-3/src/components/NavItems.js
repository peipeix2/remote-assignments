import React, { useEffect, useState } from 'react'

const linkData = [
  {
    name: 'About Us',
    link: 'https://www.google.com'
  },
  {
    name: 'Our Works',
    link: 'https://www.google.com'
  },
  {
    name: 'Our Partners',
    link: 'https://www.google.com'
  },
  {
    name: 'Contact Us',
    link: 'https://www.google.com'
  }
]

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
          {linkData.map(data => {
            return (
              <li><a href={data.link}>{data.name}</a></li>
            )
          })}
        </ul>
      </div>
      <i className="hamburger-bar fa-solid fa-bars" onClick={handleDropdown}></i>
    </div>
  )
}

export default NavItems