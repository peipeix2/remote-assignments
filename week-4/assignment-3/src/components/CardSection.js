import React, { useState } from 'react'

const cardContent = [
  {
    name: 'Animation',
    id: 1,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Design',
    id: 2,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Photography',
    id: 3,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Business',
    id: 4,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Oil Painting',
    id: 5,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Watercolor',
    id: 6,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Cuisine',
    id: 7,
    content: 'Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.'
  },
  {
    name: 'Creative Writing',
    id: 7,
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
          <div className="card" key={card.id}>
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