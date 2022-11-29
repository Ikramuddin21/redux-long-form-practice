import { createContext, useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
import LongForm from './pages/LongForm';
import Parent from './pages/Parent';

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <CounterContext.Provider value={value}>
      <div className="App">
        {/* <Parent /> */}
        {/* <Counter /> */}
        <LongForm />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
