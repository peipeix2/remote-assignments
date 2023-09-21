import React, { useState } from 'react'

const LandingImage = () => {
  const [changeWord, setChangeWord] = useState(true)

  const handleChangeWord = () => {
    setChangeWord(false)
  }

  return (
    <div className="landing-page-img" onClick={handleChangeWord}>
      <h1 className="welcome-message" onClick={handleChangeWord}>{changeWord ? 'Explore Our World' : 'Have a Good Time!'}</h1>
    </div>
  )
}

export default LandingImage