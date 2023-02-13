import * as React from 'react'
import { Button } from 'antd'

// 函数组件有状态了
function Index() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = React.useState(0)
  // const [obj, setData] = React.useState()
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Index
