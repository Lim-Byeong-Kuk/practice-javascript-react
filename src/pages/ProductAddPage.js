import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductAddPage = () => {
  //   useEffect(() => {
  //     const f = async () => {
  //       const { data } = await axios.get(`http://localhost:8080/product/${pno}`);
  //       console.log(data);
  //       setDataOne(data);
  //     }; // 함수 정의
  //     f(); //함수 호출
  //   }, [pno]);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    writer: "",
    title: "",
    content: "",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setForm((i) => ({ ...i, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit 버튼이 눌렸어요", form);
    //여기에서 backend 로 데이터를 전송

    const f = async () => {
      const res = await axios.post(`http://localhost:8080/product/add`, form);
      console.log(res.body);

      if (res.status === 200) {
        navigate("/product");
      }
    };
    f();
  };

  return (
    <div>
      ProductAddPage
      <div>
        {/* {dataOne.pno},{dataOne.title},{dataOne.content},{dataOne.writer} */}
        <form onSubmit={submitHandler}>
          <div>
            <label>작성자</label>
            <input type="text" name="writer" onChange={changeHandler} />
          </div>
          <div>
            <label>제목</label>
            <input type="text" name="title" onChange={changeHandler} />
          </div>
          <div>
            <label>내용</label>
            <input type="text" name="content" onChange={changeHandler} />
          </div>
          <input type="submit" value="등록"></input>
        </form>
      </div>
    </div>
  );
};

export default ProductAddPage;
