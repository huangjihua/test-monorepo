import React,{ useState, useRef } from 'react';

function CountCom() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const updateCount = ()=> {
    console.log(count)
    setTimeout(() => {
      setCount(ref.num+=1);
    },1000);
  }
  return <h1 onClick={updateCount}>count:{count}</h1>
}
export default CountCom;