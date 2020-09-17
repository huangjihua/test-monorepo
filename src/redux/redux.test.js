import createStore from './redux'
import reducer from './reducer'
import { add,minus,changeNum } from './action'

let initState = {
  num: 12,
}
const store = createStore(reducer, initState)
// console.log(store.getState())
// //订阅
store.subscribe(() => {
  let state = store.getState()
  console.log(state)
  console.log('收到通知：','state.num更新结果为'+state.num)
})
// store.dispatch({
//  num: store.getState().num + 1
// })
// store.dispatch({
//  num: store.getState().num - 1
// })

// // //这中情况就会返回NaN, 有没有办法限制随意更改state,更新还能不出问题呢？ 这时候reducer就出现了
// // // reducer专门来管理state的更新操作的，通过固定指令来更新
// store.dispatch({
//   num: store.getState().num - 'a'
//  })
// store.dispatch()是 View 发出 Action 的唯一方法
store.dispatch(add('num+1'))
store.dispatch(minus(1))
store.dispatch(changeNum(20))

