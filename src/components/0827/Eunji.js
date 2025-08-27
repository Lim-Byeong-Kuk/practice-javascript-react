import axios from "axios";
import React, { useEffect, useState } from "react";
import { getList } from "../api/hapi";

const Eunji = () => {
  const [li, setLi] = useState([]);

  const f = async () => {
    const listData = await getList();

    setLi(listData);
    console.log(listData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const dd = await getList();
      setLi(dd);
    };
    fetchData();
  }, []);

  return (
    <div>
      Eunji
      {li.map((i) => (
        <div>
          {i.title}
          {i.writer},{i.dueDate}
        </div>
      ))}
      <button onClick={f}>버튼</button>
    </div>
  );
};

export default Eunji;
