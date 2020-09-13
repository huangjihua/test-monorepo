import React, { useContext } from 'react'
import store from '../store' // 子组件里调用

function Child() {
  const value = useContext(store)
  return <div>child-store {value.name}</div>
}
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <Child></Child>
      </div>
    )
  }
}
