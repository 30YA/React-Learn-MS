import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import Arrow from "./Arrow";
import Card from "./Card";
function Slider() {
  const [heroes, setHeroes] = useState([]);
  const [curser, setCurser] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/heroes")
      .then((reson) => reson.json())
      .then((heroes) => setHeroes(heroes));
  }, []);

  const handlerNext = (num) => {
    const number = curser + 1 < heroes.length ? curser + 1 : 0;
    setCurser(number);
  };
  const handlerPrev = (num) => {
    const number = curser - 1 < 0 ? (heroes.length - 1) : curser - 1;
    setCurser(number);
  };
  return (
    <div className="slide-container">
      <div className="wrapper">
        {heroes.length ? (
          <>
            <Arrow direction="prev" handler={handlerPrev} />
            <Card hero={heroes[curser]} />
            <Arrow direction="next" handler={handlerNext} />
          </>
        ) : (
          <Audio color="#ffffff" height={80} width={80} />
        )}
      </div>
    </div>
  );
}

export default Slider;
