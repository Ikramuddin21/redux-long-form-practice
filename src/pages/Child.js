import React, { useContext } from 'react';
import { CounterContext } from '../App';

const Child = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <div className='child'>
            <h1>Child</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount((preState) => preState + 1)}>Increment</button>
        </div>
    );
};

export default Child;