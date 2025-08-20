import React from "react";
import { useState } from "react";
const Star = ({ inc }) => {
  const [first, setFirst] = useState(["10", "20"]); //use~  ,리액트에서 hook
  return (
    <div>
      <button onClick={() => setFirst([...first, inc])}> {inc}증가 </button>
      <div className="App">홍길동{first[2]}</div>;
    </div>
  );
};

export default Star;
