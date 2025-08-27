import React, { useState } from "react";
import { d } from "../data2";
import SoraChild from "./SoraChild";

const SoraParent = () => {
  const [cnt, setCnt] = useState(1);

  const handle = (value) => {
    setCnt(value);
  };
  return (
    <div style={{ padding: "20px" }}>
      {d.map((i, idx) => {
        console.log(i);
        const { f, text } = i;
        console.log("f : " + f + ", text : " + text);
        return (
          <SoraChild
            key={idx}
            f={i.f}
            text={i.text}
            cnt={cnt}
            handleCnt={handle}
            idx={idx}
          />
        );
      })}
      <h2>cnt : {cnt}</h2>
    </div>
  );
};

export default SoraParent;
