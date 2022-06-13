import React, { useState, useEffect } from "react";
import "./style.css";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title = `counter : ${count}`;
    function createIncrement() {
      let value = 0;

      return function increment() {
        value = value + 1;
        console.log(value);

        let message = "";
        message = `Current value is ${value}`;

        function logger() {
          console.log(message);
        }

        function getValue() {
          return value;
        }

        return {
          logger,
          getValue,
        };
      };
    }

    const counter = createIncrement();
    // value = 0
    // func increment

    counter();
    // value = 1
    // message1 = 'Current value is 1'
    // func logger1
    // func getValue1

    const { logger, getValue } = counter();
    // value = 2
    // message2 = 'Current value is 2'
    // func logger2
    // func getValue2

    counter();
    // value = 3
    // message3 = 'Current value is 3'
    // func logger3
    // func getValue3

    logger();
    console.log(getValue());
  });
  return (
    <>
      <p>You clicked {count} times!</p>
      <input
        value={step}
        type="number"
        onChange={(e) => setStep(+e.target.value)}
      />
      <button onClick={() => setCount(count + step)}>Click me!</button>
    </>
  );
}

export default App;
