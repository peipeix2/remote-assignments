import React from 'react'

const AddCounterBtn = (props) => {
  return <button className='add-counter' onClick={props.addCounter}>Add a Counter</button>
}

export default AddCounterBtn