import React, { useState } from 'react'
import Counter from './components/Counter';
import './App.css';
import AllPlusBtn from './components/AllPlusBtn';



function App() {
  const [counterData, setCounterData] = useState([
    {
      id: 1,
      number: 0
    },
    {
      id: 2,
      number: 0
    },
    {
      id: 3,
      number: 0
    }
  ])

  const handleNumChange = (id) => {
    setCounterData(prevCounterData => prevCounterData.map(counter => {
      if (counter.id === id) {
        return {
          id: counter.id,
          number: counter.number + 1
        }
      }
      return counter
    }
    ))
  }

  const handlePlusAll = () => {
    setCounterData(prevCounterData => prevCounterData.map(counter => {
      return {
        id: counter.id,
        number: counter.number + 1
      }
    }))
  }

  return (
    <div className='container'>
      <AllPlusBtn plusAll={handlePlusAll} />
      {/* render counters */}
      {counterData.map(counter => 
        <Counter 
          key={counter.id}
          id={counter.id}
          number={counter.number}
          changeNumber={handleNumChange} />
      )}
      
    </div>
    
  );
}

export default App;
