import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  const [counter, setCounter] = useState(0);
  const prevCounter = useRef(counter);
  console.log(prevCounter);
  useEffect(() => {
      prevCounter.current = counter;
    setTimeout(() => {
        console.log(prevCounter.current);
    },2000)
  },[counter])
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>click me</button>
      <div>clicked : {counter}</div>
      <div>prev Counter : {prevCounter.current}</div>
    </>
  );
}

export default UseRef;
