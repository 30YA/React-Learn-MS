import React, { useState, useMemo } from "react";

function UseMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const WordCount = (word) => {
    let i = 0;
    do {
      i++;
    } while (i <= 999999999);
    return word.length;
  };

  //   const randomNumber = Math.random() * counter1;
  const count = useMemo(() => WordCount('java'),[])

  return (
    <div>
      <p>Word Count: {count}</p>
      {/* <p>Random number is: {randomNumber}</p> */}
      <p>Click count1: {counter1}</p>
      <p>Click count2: {counter2}</p>
      <div>
        <button onClick={() => setCounter1((c) => c + 1)}>Increament1</button>
        <button onClick={() => setCounter1((c) => c - 1)}>Decrease1</button>
      </div>
      <div>
        <button onClick={() => setCounter2((c) => c + 1)}>Increament2</button>
        <button onClick={() => setCounter2((c) => c - 1)}>Decrease2</button>
      </div>
    </div>
  );
}

export default UseMemo;
