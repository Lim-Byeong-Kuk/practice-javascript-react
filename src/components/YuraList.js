import axios from "axios";
import React, { useState } from "react";

export default function YuraList() {
  const [data1, setData1] = useState([]);
  const f = async (e) => {
    e.preventDefault(); //이벤트를 잠깐 멈춘다
    try {
      const res = await axios.get("http://localhost:5000/api/a", {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      const { data } = res;
      console.log(data);
      setData1(data);
    } catch (err) {
      console.error(err);
    }
  };
  const v = async (e, t) => {
    e.preventDefault(); //이벤트를 잠깐 멈춘다
    console.log(t); //여기서 삭제할 번호가 넘어오는지 확인하세요
    try {
      const res = await axios.get(`http://localhost:8080/api/d?yno=${t}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      const { data } = res;
      console.log(data);
      setData1(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "20px auto", padding: 16 }}>
      <button onClick={f}>데이터 가져오기</button>
      {data1.map((i) => (
        <div>
          {i.firstName} ,{i.lastName} ,{i.email} {data1.firstName}
          <button onClick={(e) => v(e, i.yno)}>삭제</button>
        </div>
      ))}
    </div>
  );
}
