import React, { useEffect, useState } from 'react'

const linkData = [
  {
    name: 'About Us',
    id: 1,
    link: 'https://www.google.com'
  },
  {
    name: 'Our Works',
    id: 2,
    link: 'https://www.google.com'
  },
  {
    name: 'Our Partners',
    id: 3,
    link: 'https://www.google.com'
  },
  {
    name: 'Contact Us',
    id: 4,
    link: 'https://www.google.com'
  }
]

const NavItems = () => {
  // if true, show dropdown
  const [dropDown, setDropDown] = useState(false)

  // if screen width >= 800px, close the dropdown
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setDropDown(false)
      } 
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)}
  }, [])

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
              <li key={data.id}><a href={data.link}>{data.name}</a></li>
            )
          })}
        </ul>
      </div>
      <i className="hamburger-bar fa-solid fa-bars" onClick={handleDropdown}></i>
    </div>
  )
}

export default NavItems