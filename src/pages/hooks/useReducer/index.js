import React, { useReducer } from 'react'
import Demo from './test'

const initState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
function Counter() {
  const [state, dispatch] = useReducer({ reducer, initState })
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}></button>
      <button onClick={() => dispatch({ type: 'increment' })}></button>
    </>
  )
}

export { Counter, Demo }
// reducer就是一个只能通过action将state从一个过程转换成另一个过程的纯函数;
// useReducer就是一种通过(state,action) => newState的过程，和redux工作方式一样。
// 数据流： dispatch(action) => reducer更新state => 返回更新后的state
