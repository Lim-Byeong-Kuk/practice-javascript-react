import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../api/hapi";

const Nuna = () => {
  const { dno } = useParams();
  const arr = data;

  const article = arr.find((i) => i.dno == Number(dno));

  console.log(dno);
  console.log(arr);
  console.log(article);

  return (
    <div>
      Nuna
      <div>
        {article && (
          <div>
            {article.title}
            {article.writer} {article.dueDate}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nuna;
