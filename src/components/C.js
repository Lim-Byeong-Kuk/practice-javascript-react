import React, { useState } from "react";
import CChild from "./CChild";
import { d } from "../data2";

const C = () => {
  const [cnt, setCnt] = useState(1);
  console.log(d);

  const cntHandler = (data) => {
    setCnt(data);
  };

  return (
    <div>
      C Page
      {d.map((i, index) => (
        <div style={{ border: "solid 1px black" }} key={index}>
          <CChild ff={i} cntHandler={cntHandler} />
        </div>
      ))}
      {cnt}
      {/* cnt 값이 각각의 버튼에 대응되는 함수에 따라 값이 변경되도록 */}
    </div>
  );
};

export default C;
