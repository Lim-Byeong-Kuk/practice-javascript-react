import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOne } from "../api/starapi";

const StarAdd = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    korea: 0,
    math: 0,
    eng: 0,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const add = async (form) => {
      const data = await addOne(form);
      setForm(data);
      if (data) {
        navigate("/star/list2");
      }
    };
    add(form);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log(name + " value : ", value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      StarAdd
      <form method="post" onSubmit={submitHandler}>
        <div>
          <label>국어</label>
          <input type="number" name="korea" onChange={changeHandler} />
        </div>
        <div>
          <label>영어</label>
          <input type="number" name="eng" onChange={changeHandler} />
        </div>
        <div>
          <label>수학</label>
          <input type="number" name="math" onChange={changeHandler} />
        </div>
        <input type="submit" value="등록" />
      </form>
    </div>
  );
};

export default StarAdd;
