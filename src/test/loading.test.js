import React, { useRef } from 'react'
import useLoading from '../hooks-componet/useLoading'

const LoadList = (text) => {
  const ref = useRef(null)
  const loading = useLoading(ref)
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 181, 19, 20]
  return (
    <>
      {arr.map((item, index) => (
        <div className="card" key={index}>
          {item}adfada
        </div>
      ))}
      <div className="scrollitem" ref={ref}>
        {loading ? 'loading' : text}
      </div>
    </>
  )
}

export default LoadList
