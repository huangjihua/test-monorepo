import { ADD,MINUS,CHANGE_NUM } from './action'
export default function reducer(action, state) {
  //通过传进来的 action.type 让管理者去匹配要做的事情
  switch (action.type) {
  case ADD:
    return {
      ...state,
      text: action.text,
      num: state.num + 1
    }
  case MINUS:
    return {
      ...state,
      index: action.index,
      num: state.num - 1
    }
  case CHANGE_NUM:
    return {
      ...state,
      val: action.val,
      num: state.num + action.val
    }
    // 没有匹配到的方法 就返回默认的值
  default:
    return state
  }
}