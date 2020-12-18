import React, { useState, useEffect } from 'react'
import input from '../../../component/input'

export default function EffectDemo2() {
  const [data, setData] = useState(1)
  useEffect(() => {
    console.log('useEffect1—demo2')
    fetch('http://api.tianapi.com/txapi/joke/index?key=f12bfeb7f74cd110189d373c0f284bd9&num=1')
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
  }, [])

  useEffect(() => {
    console.log('useEffect2 ---> 无依赖')
  })

  useEffect(() => {
    console.log(`useEffect3 依赖data： data发生了变化:${data}`)
  }, [data])

  const handler = () => {
    setData(data + 1)
  }

  return (
    <div>
      {(() => {
        console.log('Demo2-render')
        return null
      })()}
      <p>EffectDemo2 data: {JSON.stringify(data)}</p>
      <button onClick={handler}>点击更新data</button>
    </div>
  )
}

// 结论：

// effect在render后按照前后顺序执行。
// effect在没有任何依赖的情况下，render后每次都按照顺序执行。
// effect内部执行是异步的。
// 依赖[]可以实现类似componentDidMount的作用，但最好忘记生命周期， 只记副作用。
