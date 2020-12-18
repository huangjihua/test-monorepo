import React, { useContext, useState } from 'react'

// const value = useContext(MyContext)
// MyContext 为 context 对象（React.createContext 的返回值）
// useContext 返回MyContext的返回值。
// 当前的 context 值由上层组件中距离当前组件最近的<MyContext.Provider> 的 value prop 决定。
const MyContext = React.createContext()
function Demo1() {
  const [value, setValue] = useState('init')
  console.log('Demo1')
  return (
    <div>
      {(() => {
        console.log('render')
        return null
      })()}
      <button
        onClick={() => {
          console.log('click：更新value')
          setValue(`${Date.now()}_newValue`)
        }}
      >
        改变value
      </button>
      <MyContext.Provider value={value}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  )
}

function Child1() {
  const value = useContext(MyContext)
  console.log('Child1-value', value)
  return <div>Child1-value: {value}</div>
}

// function Child2(props) {
//   console.log('Child2')
//   return <div>Child2</div>
// }

const Child2 = React.memo((props) => {
  console.log('Child2')
  return <div>Child2</div>
})

export default Demo1
// 结论：

// useContext 的组件总会在 context 值变化时重新渲染， 所以<MyContext.Provider>包裹的越多，层级越深，性能会造成影响。

// <MyContext.Provider> 的 value 发生变化时候， 包裹的组件无论是否订阅content value，所有组件都会从新渲染。

// demo中child2 不应该rerender, 如何避免不必要的render？*
// 使用React.memo优化

// 执行顺序
//  Demo1
//  render
//  Child1-value init
//  Child2
//  click:更新value
//  Demo1
//  render
//  Child1-value 1608188227969_newValue
//  Child2
