import axios from "axios";
import React, { useState } from "react";

export default function YuraEditOne() {
  const PORT = 5000;
  const [member, setMember] = useState({
    yno: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [yno, setYno] = useState("0");

  const getMemberOne = async (e) => {
    e.preventDefault(); // 이벤트를 잠깐 멈춘다.

    try {
      const res = await axios.get(
        `http://localhost:${PORT}/api/get?yno=${yno}`,
        {
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify(form),
        }
      );

      console.log("res 로그");
      console.log(res); // 응답을 로그로 찍어보기

      const { data } = res; //destructuring
      console.log("data 로그");
      console.log(data);
      setMember(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "20px auto", padding: 16 }}>
      <button onClick={getMemberOne}>데이터 하나 가져오기</button>
      <input type="text" name="yno" onChange={(e) => setYno(e.target.value)} />
      <div>
        {member.yno}, {member.firstName}, {member.lastName}, {member.email}
      </div>
    </div>
  );
}
