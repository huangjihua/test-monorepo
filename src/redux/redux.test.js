import React from 'react'
import creatStore from './redux'
import reducer from './reducer'
//  测试 createStore使用

let initState = {
  num: 10,
}
export const store = creatStore(reducer, initState)

//订阅
store.subscribe(() => {
  let state = store.getState()
  console.log(state.num)
})
// // +1
// store.dispatch({
//  num: store.getState().num + 1
// })
// //-1
// store.dispatch({
//  num: store.getState().num - 1
// })

// //这中情况就会返回NaN, 有没有办法限制随意更改state,更新还能不出问题呢？ 这时候reducer就出现了
// // reducer专门来管理state的更新操作的，通过固定指令来更新
// store.dispatch({
//   num: store.getState().num - 'a'
//  })

// store.dispatch({type:"add"})
// store.dispatch({type:"minus", num:19})
// store.dispatch({type:"changeNum", val:20})

// 写个测试组件 展示
const reduxTest = (props) => {
  let { state } = props
  return (
    <div className="redux">
      <div>自定义redux测试用例</div>
      <button
        onClick={() => {
          store.dispatch({ type: 'add', playload: props })
        }}
      >
        增加
      </button>
      <div>Num:{state.num}</div>
    </div>
  )
}

export default reduxTest
