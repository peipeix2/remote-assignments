import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter';
import AllPlusBtn from './components/AllPlusBtn';
import AddCounterBtn from './components/AddCounterBtn';



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

  const handleAddCounter = () => {
    setCounterData(prevCounterData => {
      return [
        ...prevCounterData,
        {
          id: prevCounterData.length + 1,
          number: 0
        }
      ]
    })
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
      <AddCounterBtn addCounter={handleAddCounter} />
    </div>
    
  );
}

export default App;
