import React, { useState } from 'react'

const cardContent = [
  {
    name: 'Animation',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Design',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Photography',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Business',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Oil Painting',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Watercolor',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Cuisine',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Creative Writing',
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  }
]

const CardSection = () => {
  const [cardData, setCardData] = useState(cardContent.slice(0,4))

  const handleReadMore = () => {
    if (cardData.length > 4) {
      setCardData(cardContent.slice(0, 4))
    } else {
      setCardData(cardContent)
    }
  }

  return (
    <section>
      <h2 className="sub-heading">Our Service</h2>
      <div className="card-container">
        {cardData.map(card => {
          return (
          <div className="card">
          <p>{card.name}</p>
          <span>{card.content}</span>
        </div>
        )
        })}
      </div>
      <button className="landing-page-button" onClick={handleReadMore}>
       {cardData.length > 4 ? 'SHOW LESS' : 'READ MORE'}
      </button>
    </section>
  )
}

export default CardSection