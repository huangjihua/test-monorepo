import React, { useState, useEffect, useRef } from "react"
function Demo3() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log('useEffect—[]')
    fetch('http://api.tianapi.com/txapi/joke/index?key=f12bfeb7f74cd110189d373c0f284bd9&num=10')
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    console.log("useEffect ---> 无依赖");
  });

  useEffect(() => {
    console.log('useEffect 依赖data： data发生了变化');
  }, [data]);

  return (
    <div>
      <p>data: {JSON.stringify(data)}</p>
    </div>
  );
}
export default Demo3;
