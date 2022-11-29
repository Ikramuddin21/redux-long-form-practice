import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        console.log(action);
        if (action.type === 'INCREMENT') {
            return state + action.payLoad.count;
        }
        else if (action.type === 'DECREMENT') {
            return state - action.payLoad.count;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='counter'>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: 'DECREMENT', payLoad: {count: 5}})}>Decrement</button>
            <button onClick={() => dispatch({type: 'INCREMENT', payLoad: {count: 5}})}>Increment</button>
        </div>
    );
};

export default Counter;