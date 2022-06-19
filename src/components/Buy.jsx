// import BuyClass from "./BuyClass";
import { useState, useEffect } from "react";

import BuyFunc from "./BuyFunc";
import Count from "./Counter";
import Max from "./Max";

export default function Buy({name,id}) {
  const [max, setMax] = useState(0);
  useEffect(() => {
    const fetchMax = setInterval(() => {
      fetch(`http://localhost:3001/restricts?hero_id=${id}`)
      .then((res) => res.json())
      .then((restricts) => {
        setMax(restricts[0].max);
        console.log(id);
      });
    }, 2000);
    return () => clearInterval(fetchMax);
  },[id]);
  return (
    <div className="badge-wrapper">
      <div>
        <Max max={max} />
        <Count />
      </div>
      <BuyFunc name={name} />
    </div>
  );
}
