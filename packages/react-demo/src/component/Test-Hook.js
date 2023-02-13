// userState 组件有状态
// 函数是无状态的
// hooks是有状态的函数

import React, {useState} from 'react';

const HookTest = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}> 
        点击
      </button>
    </div>
  )
}