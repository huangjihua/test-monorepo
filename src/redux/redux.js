/*
 const  createStore = (initState) =>{
  let state = initState
  let subscribers = [] ;
  // 订阅  定义一个 subscribe
  const subscribe = (fn) => {
    subscribers.push(fn)
  }

  // 发布
  const dispatch = (currentState) => {
    state = currentState
    // 当数据发生改变，调用（通知）所有方法（订阅者） 
    subscribers.forEach(fn => fn())
  }

  // 这里需要添加这个获取state的方法

  const getState = () => {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}
*/
// 引入 reducer 重构createStore 

/**
 * 
 *
 * @param {Function} reducer  管理状态更新者 接收：action,state 两参数
 * @param {} initState
 * @returns 返回 subscribe, dispatch, getState 三大方法
 * */
const  createStore = (reducer,initState) =>{
  let state = initState
  let subscribers = [] ;
  // 订阅  定义一个 subscribe
  const subscribe = (fn) => {
    subscribers.push(fn)
  }

  // 发布  这里不再是传状态了，而是改传改变状态的命令（通过固定指令告诉管理者需要做什么）
  const dispatch = (action) => {
    state = reducer(action,state) // 执行 reducer 返回新的state
    // 当数据发生改变，调用（通知）所有方法（订阅者） 
    subscribers.forEach(fn => fn())
  }

  // 这里需要添加这个获取state的方法

  const getState = () => {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}



export default createStore


