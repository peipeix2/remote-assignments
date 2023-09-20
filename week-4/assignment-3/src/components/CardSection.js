import React from 'react'

const CardSection = () => {
  return (
    <section>
      <h2 className="sub-heading">Our Service</h2>
      <div className="card-container">
        <div className="card animation">
          <p>Animation</p>
          <span>Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur
            non non ante.</span>
        </div>
        <div className="card design">
          <p>Design</p>
          <span>Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur
            non non ante.</span>
        </div>
        <div className="card photography">
          <p>Photography</p>
          <span>Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.</span>
        </div>
        <div className="card business">
          <p>Business</p>
          <span>Praesent arcu ipsum, sagittis luctus diam sed, tempus lacinia leo. Integer posuere nunc nec nisi elementum consectetur non non ante.</span>
        </div>
      </div>
      <button className="landing-page-button">
        READ MORE
      </button>
    </section>
  )
}

export default CardSection