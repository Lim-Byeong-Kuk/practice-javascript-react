import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import { makeDiv } from "../../util/makeDivCss";

const initialState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};
const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initialState);
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Complete", todo.complete ? "완료" : "미완료")}
    </div>
  );
};

export default ReadComponent;
