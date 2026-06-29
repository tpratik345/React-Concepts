import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../store';
import { decrement, increment, reset } from './counterSlice';

function Counter() {

    const { count } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <div>Counter: {count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter