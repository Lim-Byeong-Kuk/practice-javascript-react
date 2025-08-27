import React from "react";

const CChild = ({ ff, cntHandler }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    const { f } = ff;
    console.log("typeof ff" + typeof f);
    console.log("typeof cntHandler" + typeof cntHandler);
    cntHandler((prev) => f(prev));
  };
  return (
    <div>
      {ff.text}
      <button onClick={(e) => clickHandler(e)}>버튼</button>
    </div>
  );
};

export default CChild;
