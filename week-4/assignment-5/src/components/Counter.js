import React from 'react'

const Counter = (props) => {
  return (
    <div className='counter'>
      <button className='increment'>+1</button>
      <p className='cur-number'>{props.number}</p>
    </div>
  )
}

export default Counter