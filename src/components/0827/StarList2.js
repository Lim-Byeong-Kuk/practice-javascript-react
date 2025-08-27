import React, { useEffect, useState } from "react";
import { deleteOne, getList2 } from "../api/starapi";
import { Link, useNavigate } from "react-router-dom";

const StarList2 = () => {
  const [sList, setSList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const listData = await getList2();
      setSList(listData);
    };
    getData();
  }, []);

  const deleteHandler = (e, sno) => {
    e.preventDefault();
    deleteOne(sno, setSList);
  };

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
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            {sList &&
              sList.map((i) => (
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
                  <td>
                    <button onClick={(e) => deleteHandler(e, i.sno)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          navigate("/star/add");
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default StarList2;
