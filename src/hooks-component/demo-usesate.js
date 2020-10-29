import React, { useState, useEffect, useRef } from "react";

function Demo2() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div>
      {(() => {
        console.log("render");
        return null;
      })()}
      <p>data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default Demo2;