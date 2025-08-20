import React from "react";
import { AiFillBank, AiFillAlert, AiFillBehanceCircle } from "react-icons/ai";
const TrueGreen = () => {
  var list = [<AiFillBank />, <AiFillAlert />, <AiFillBehanceCircle />];
  return <div>{list.map((i) => i)}</div>;
};

export default TrueGreen;
