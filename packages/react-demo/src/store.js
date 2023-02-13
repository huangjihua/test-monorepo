// 实现全局redux
import React from 'react';
const store = React.createContext({name:'nimo'}); // 全局store容器
export const initialState = { name: 'hank',count:0 };
/**
 * reducer必须是纯函数，用来描述action如何改变state
 *
 * @export
 * @param {Object} state 状态
 * @param {Object} action 
 * @returns 返回新的state
 */
export function reducer(state, action) {
  switch (action.type) {
  case 'changeName': return { ...state, name: action.payload };
  case 'increment':
    return { ...state, count: state.count + 1};
  case 'decrement':
    return {...state, count: state.count - 1};
  default: throw new Error('Unexpected action');
  }
}
export default store;