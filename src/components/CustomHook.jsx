import { useState } from "react";

function CustomHook(init) {
  const [filds, setFilds] = useState(init);

  const handle = (e) => {
    const { target } = e;
    setFilds({
      ...filds,
      [target.name]: target.value,
    });
  };

  return {filds,handle}
}

export default CustomHook;
