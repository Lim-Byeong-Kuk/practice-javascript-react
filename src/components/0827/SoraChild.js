import React from "react";

const SoraChild = (props) => {
  const { f, text, cnt, handleCnt, idx } = props;
  const clickHandler = (e) => {
    console.log(e);
    handleCnt(f(cnt));
  };
  return (
    <div>
      <button onClick={(e) => clickHandler(e)}>{text}</button>
    </div>
  );
};

export default SoraChild;
