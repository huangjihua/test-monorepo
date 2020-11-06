import React, { useState, useEffect } from 'react'

export default function EffectDemo2() {
  const [data, setData] = useState()
  useEffect(() => {
    console.log('useEffect—[]')
    fetch('http://api.tianapi.com/txapi/joke/index?key=f12bfeb7f74cd110189d373c0f284bd9&num=1')
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
  }, [])

  useEffect(() => {
    console.log('useEffect ---> 无依赖')
  })

  useEffect(() => {
    console.log('useEffect 依赖data： data发生了变化')
  }, [data])

  return (
    <div>
      {(() => {
        console.log('Demo2-render')
        return null
      })()}
      <p>EffectDemo2 data: {JSON.stringify(data)}</p>
    </div>
  )
}

// 结论：

// effect在render后按照前后顺序执行。
// effect在没有任何依赖的情况下，render后每次都按照顺序执行。
// effect内部执行是异步的。
// 依赖[]可以实现类似componentDidMount的作用，但最好忘记生命周期， 只记副作用。
