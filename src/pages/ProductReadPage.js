import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductReadPage = () => {
  // const param = useParams();
  // console.log(param.pno);

  const { pno } = useParams();
  console.log(pno);

  const [dataOne, setDataOne] = useState({});

  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get(`http://localhost:8080/product/${pno}`);
      console.log(data);
      setDataOne(data);
    }; // 함수 정의
    f(); //함수 호출
  }, [pno]);

  return (
    <div>
      ProductReadPage
      <div>
        {dataOne.pno},{dataOne.title},{dataOne.content},{dataOne.writer}
      </div>
    </div>
  );
};

export default ProductReadPage;
