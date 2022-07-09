import { useState, useDebugValue } from "react";

function CustomHook(init) {
  const [filds, setFilds] = useState(init);

  const handle = (e) => {
    const { target } = e;
    setFilds({
      ...filds,
      [target.name]: target.value,
    });
  };

  //useDebugValue(`${Object.keys(filds).length} filds`)
  useDebugValue(filds, filds => `${Object.keys(filds).length} filds`)
  
  return { filds, handle };
}

export default CustomHook;
