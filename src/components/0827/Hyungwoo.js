import axios from "axios";
import React, { useEffect, useState } from "react";
import { getOne } from "../api/hapi";

const Hyungwoo = () => {
  const [todo, setTodo] = useState({});
  const [inputTno, setInputTno] = useState(0);
  const getData = async (id) => {
    try {
      const dd = await getOne({ tno: id });
      setTodo(dd);
    } catch (err) {
      console.err("데이터를 찾지 못했어요");
    }
  };
  useEffect(() => {
    getData(101);
  }, []);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log("value:" + value);
    setInputTno(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getData(inputTno);
  };

  return (
    <div>
      Hyungwoo
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>원하는 번호를 입력하시면 정보를 줄께요</label>
            <input type="number" name="tno" onChange={changeHandler} />
          </div>
          <input type="submit" value="조회"></input>
        </form>
      </div>
      {todo && (
        <div>
          {todo.tno} {todo.title} {todo.writer} {todo.dueDate}
        </div>
      )}
    </div>
  );
};

export default Hyungwoo;
