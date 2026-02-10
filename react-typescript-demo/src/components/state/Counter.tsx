import React, { useReducer } from 'react'

const initialState = { count: 0 };

type StateType = {
  count: number
}

type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}
type ResetAction = {
  type: 'reset'
}
// type ActionType = {
//   type: 'increment' | 'decrement' | 'reset'
//   payload?: number
// }

type ActionType = UpdateAction | ResetAction

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action?.payload }
    case 'decrement':
      return { count: state.count - action?.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch]  = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment by 10</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement by 10</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  )
}

export default Counter