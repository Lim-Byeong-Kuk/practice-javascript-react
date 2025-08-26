import React, { useEffect, useState } from "react";
import { getOne } from "../api/starapi";
import { useParams } from "react-router-dom";

const StarOne = () => {
  const { sno } = useParams();
  const [score, setScore] = useState({});

  const getScore = async () => {
    try {
      const resData = await getOne(sno);
      setScore(resData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getScore();
  }, []);

  return (
    <div>
      StarOne
      <div>
        <table>
          <thead>
            <tr>
              <th>sno</th>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>총점</th>
              <th>평균</th>
              <th>등급</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{score.sno}</td>
              <td>{score.korea}</td>
              <td>{score.eng}</td>
              <td>{score.math}</td>
              <td>{score.total}</td>
              <td>{score.avg}</td>
              <td>{score.grade}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StarOne;
