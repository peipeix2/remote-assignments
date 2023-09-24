import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';



function App() {
  const counterData = [
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
  ]

  return (
    <div className='container'>
      {/* render counters */}
      {counterData.map(counter => 
        <Counter 
          id={counter.id} 
          number={counter.number} />
      )}
      
    </div>
    
  );
}

export default App;
