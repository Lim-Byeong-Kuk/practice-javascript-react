import React from "react";
import {
  AiFillCrown,
  AiFillGithub,
  AiFillAliwangwang,
  AiFillAndroid,
  AiFillApple,
  AiOutlineDocker,
  AiOutlineTwitter,
} from "react-icons/ai";
const TrueGreen = () => {
  var list = [
    <AiFillCrown size="80" />,
    <AiFillGithub size="80" />,
    <AiFillAliwangwang size="80" />,
    <AiFillAndroid size="80" />,
    <AiFillApple size="80" />,
    <AiOutlineDocker size="80" />,
    <AiOutlineTwitter size="80" />,
  ];

  return <div>{list.map((i) => i)}</div>;
};

export default TrueGreen;
