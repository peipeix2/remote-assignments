import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';

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

function App() {


  return (
    <div className='container'>
      <Counter />
    </div>
    
  );
}

export default App;
