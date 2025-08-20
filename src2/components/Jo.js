import React from "react";

const Jo = ({ a, b, q, r }) => {
  console.log(a, b);
  q("사랑");
  var z = r({ a: [15, 20, 35, 40] });
  console.log(z);
  // z를 출력했을 때, 홀수의 합 50이 나오도록
  return <div>Jo</div>;
};

export default Jo;
