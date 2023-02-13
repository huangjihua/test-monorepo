import React, { useState, useEffect } from 'react'

// useEffect(()  =>  {// Async Action}, ?[dependencies]); // 第二参数非必填

export default function EffectDemo1() {
  const [data, setData] = useState()
  useEffect(() => {
    console.log('Demo1-useEffect')
  })
  return (
    <div>
      {(() => {
        console.log('Demo1-render')
        return null
      })()}
      <p>EffectDemo1 data: {JSON.stringify(data)}</p>
    </div>
  )
}

// 结论：useEffect 是在render之后生效执行的。
