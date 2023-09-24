import React from 'react'

const Counter = (props) => {
  const handleIncrement = () => {
    props.changeNumber(props.id)
  }

  return (
    <div className='counter'>
      <button className='increment' onClick={handleIncrement}>+1</button>
      <p className='cur-number'>{props.number}</p>
    </div>
  )
}

export default Counter