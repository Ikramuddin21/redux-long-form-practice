import React, { useContext, useState } from 'react';
import { CounterContext } from '../App';
import Child from './Child';

const Parent = () => {
    // const [count, setCount] = useState(0);
    const {count} = useContext(CounterContext);
    return (
        <div className="parent">
            <div className='parent-wrapper'>
                <h1>Parent</h1>
                <h1>{count}</h1>
            </div>
            <Child />
        </div>
    );
};

export default Parent;