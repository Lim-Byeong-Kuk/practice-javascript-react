import React from "react";
import { data } from "../api/hapi";
import { Link } from "react-router-dom";

const Jongmin = () => {
  const arr = data;
  return (
    <div>
      Jongmin
      {arr.map((i) => (
        <div key={i.dno}>
          <Link to={`/c/${i.dno}`}>{i.dno}</Link>
          {i.title}
          {i.writer}
          {i.dueDate}
          <img src={i.img} width="200px" height="200px"></img>
        </div>
      ))}
    </div>
  );
};

export default Jongmin;
