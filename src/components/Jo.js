import React from "react";

const Jo = ({ a, b, q, r }) => {
  console.log(a, b);
  q("사랑");
  var z = r({ a: [15, 20, 35, 40] ,b:[20,30]});
  console.log(z); //홀수의 합 (50 )

  return <div>Jo</div>;
};

export default Jo;
