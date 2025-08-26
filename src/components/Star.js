import React, { useEffect, useState } from "react";
import { getOne } from "../api/starapi";

const Star = () => {
  const [score, setScore] = useState({});
  const [inputSno, setInputSno] = useState(2);
  const getScore = async () => {
    try {
      const resData = await getOne(inputSno);
      setScore(resData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getScore();
  }, []);

  useEffect(() => {
    console.log("score 변경됨:", score);
  }, [score]);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log(name + " value : " + value);
    setInputSno(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getScore();
  };

  return (
    <div>
      Star
      <form onSubmit={submitHandler}>
        <div>
          <label>조회할 sno 를 입력하세요</label>
          <input type="number" name="sno" onChange={changeHandler}></input>
        </div>
        <input type="submit" value="조회"></input>
      </form>
      <div>
        <div>sno : {score.sno}</div>
        <div>korea : {score.korea}</div>
        <div>eng : {score.eng}</div>
        <div>math : {score.math}</div>
        <div>total : {score.total}</div>
        <div>avg : {score.avg}</div>
        <div>grade : {score.grade}</div>
      </div>
    </div>
  );
};

export default Star;
