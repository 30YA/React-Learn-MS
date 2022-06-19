import { useEffect } from "react";

export default function BuyFunc({ name }) {
  function showAlert() {
    alert(name);
  }
  function handleClick() {
    setTimeout(showAlert, 2000);
  }
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <span className="badge" onClick={handleClick}>
        Buy
      </span>
      <p>function</p>
    </div>
  );
}
