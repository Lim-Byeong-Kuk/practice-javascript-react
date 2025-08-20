import axios from "axios";
import React, { useState } from "react";

export default function YuraOne() {
  const [data1, setData1] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [yno, setYno] = useState("0");
  const f = async (e) => {
    e.preventDefault(); //이벤트를 잠깐 멈춘다
    try {
      const res = await axios.get(`http://localhost:8080/api/get?yno=${yno}`, {
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
      <button onClick={f}>데이터 하나 가져오기</button>
      <input type="text" name="yno" onChange={(e) => setYno(e.target.value)} />
    
    </div>
  );
}
