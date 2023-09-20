import React from 'react'

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
  }
]

const CardSection = () => {
  return (
    <section>
      <h2 className="sub-heading">Our Service</h2>
      <div className="card-container">
        {cardContent.map(card => {
          return (
          <div className="card">
          <p>{card.name}</p>
          <span>{card.content}</span>
        </div>
        )
        })}
      </div>
      <button className="landing-page-button">
        READ MORE
      </button>
    </section>
  )
}

export default CardSection