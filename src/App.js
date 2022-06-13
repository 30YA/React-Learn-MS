import React, { useState, useEffect } from "react";
import "./style.css";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title = `counter : ${count}`;
  })
  return (
    <>
      <p>You clicked {count} times!</p>
      <input value={step} type="number" onChange={(e) => setStep(+e.target.value)}/>
      <button onClick={() => setCount(count + step)}>Click me!</button>
    </>
  );
}

export default App;
