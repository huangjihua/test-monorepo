export const ADD = 'ADD'
export const MINUS = 'MINUS'
export const CHANGE_NUM = 'CHANGE_NUM'

/*
 *  Action Creator 
 *  View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action
 */

export function add(text) {
  return { type: ADD, text }
}

export function minus(index) {
  return { type: MINUS, index }
}

export function changeNum(val) {
  return { type: CHANGE_NUM, val }
}