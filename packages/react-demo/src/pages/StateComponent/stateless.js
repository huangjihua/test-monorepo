import React from 'react'

//  功能（无状态）组件,Functional (Stateless) Component  一般只负责渲染
export function Stateless(props) {
  return (
    <div>
      <h1>功能（无状态）组件：</h1>
      <p> Hello, {props.name}</p>s
    </div>
  )
}

// 渲染组件  Presentational Component，和功能（无状态）组件类似。
export const RenderCom = (props) => {
  return (
    <div>
      <h1>渲染组件：</h1>
      <p>Hello! {props.name}</p>
    </div>
  )
}
