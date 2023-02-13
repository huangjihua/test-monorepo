import React, { useState, useEffect, useRef } from 'react'

function EffectDemo3() {
  useEffect(() => {
    console.log('useEffect1')
    const timeId = setTimeout(() => {
      console.log('useEffect1-setTimeout-3000')
    }, 3000)
    return () => {
      clearTimeout(timeId)
    }
  }, [])
  useEffect(() => {
    console.log('useEffect2')
    const timeId = setInterval(() => {
      console.log('useEffect2-setInterval-5000')
    }, 5000)
    return () => {
      clearInterval(timeId)
    }
  }, [])
  return (
    <div>
      {(() => {
        console.log('EffectDemo3-render')
        return null
      })()}
      <p>EffectDemo3</p>
    </div>
  )
}
export default EffectDemo3

// 结论：

// effect回调函数是按照先后顺序同时执行的。
// effect的回调函数返回一个匿名函数，相当于componentUnMount的钩子函数，一般是remove eventLisenter， clear timeId等，主要是组件卸载后防止内存泄漏。

// 综上所述，useEffect 就是监听每当依赖变化时，执行回调函数中存在函数组件中的钩子函数。
