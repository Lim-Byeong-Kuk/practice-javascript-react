import React, { useEffect, useState } from "react";
import { getList } from "../api/starapi";
import { Link } from "react-router-dom";

const StarList = () => {
  const [sList, setSList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listData = await getList();
      setSList(listData);
    };
    getData();
  }, []);

  return (
    <div>
      StarList
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
            {sList.map((i) => (
              <tr key={i.sno}>
                <td>
                  <Link to={`/star/${i.sno}`}>{i.sno} </Link>
                </td>
                <td>{i.korea}</td>
                <td>{i.eng}</td>
                <td>{i.math}</td>
                <td>{i.total}</td>
                <td>{i.avg}</td>
                <td>{i.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {sList.map((i) => (
          <td>
            <Link to={`/star/${i.sno}`}>{i.sno} </Link>
            {i.korea}, {i.eng}, {i.math}, {i.total}, {i.avg}, {i.grade}
          </td>
        ))} */}
      </div>
    </div>
  );
};

export default StarList;
