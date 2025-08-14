import React, { useState } from "react";
import axios from "axios";
const Star = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/submit", {
        a: 10,
        b: 20,
      });
      console.log(res);
    } catch (error) {
      console.log("전송실패: ", error);
    }
  };

  const hong = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/hong", {
        a: 3,
      });
      console.log(res);
    } catch (error) {
      console.log("전송실패: ", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* 서버로 받은 데이터 {serverData ? message : "아직없음"} */}
      <h1>이름입력</h1>
      {/* 버튼을 누르면 handleSubmit() 함수가 호출됨  */}
      <button onClick={handleSubmit}>버튼</button>

      <button onClick={hong}>홍길동 버튼</button>
      <div></div>
    </div>
  );
};

export default Star;
