import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

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

  return <div>ReadComponent, {todo.title}</div>;
};
const makeDiv = (title, value) => (
  <div>
    <div>
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
    </div>
  </div>
);

export default ReadComponent;
