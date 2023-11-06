import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  const [count, setCount] = useState(0);
  const handleChange = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <div className='section'>
        <Header />
      </div>
      <div className='section'>
        <Viewer count={count} />
      </div>
      <div className='section'>
        <Controller onIncDec={handleChange} />
      </div>
    </div>
  );
}

export default App;
