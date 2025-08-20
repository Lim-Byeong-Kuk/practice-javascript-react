import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const [na, setNa] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((i) => i.json())
      .then((i) => {
        console.log(i);
        setNa(i);
      });
  }, []);

  const deleteHandler = (e, pno) => {
    console.log("삭제 버튼이 눌렸어요");

    const df = async () => {
      console.log("df", pno);
      const { data } = await axios.get(
        `http://localhost:8080/product/delete/${pno}`
      );
      setNa(data);
    };
    df();
  };
  return (
    <div>
      ProductListPage
      {na.map((i) => (
        <div key={i.pno}>
          <Link to={`/product/${i.pno}`} style={{ color: "red" }}>
            {i.pno}
          </Link>
          {i.content}, {i.writer}, {i.title}
          <button onClick={(e) => deleteHandler(e, i.pno)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
