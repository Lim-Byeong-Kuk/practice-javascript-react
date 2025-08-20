import React, { useState } from "react";
import axios from "axios";
const Client = () => {
  const [data, setData] = useState({ name: "", age: 0 });
  const [serverData, setServerData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/submit", {
        name: data.name,
        age: data.age,
      });
      console.log(res);
      const { message } = res.data;
      console.log(message);
      setServerData(message);
      alert(
        "이름이 백엔드에 전송되었어요 나중에 db와 backend에서 연동이 되겠죠?"
      );
    } catch (error) {
      console.log("전송실패: ", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* 서버로 받은 데이터 {serverData ? message : "아직없음"} */}
      <h1>이름입력</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.name}
          placeholder="이름을 입력하세요"
          onChange={(e) => setData((i) => ({ ...i, name: e.target.value }))}
        />

        <input
          type="text"
          value={data.age}
          placeholder="나이"
          onChange={(e) =>
            setData((i) => ({ ...i, age: Number(e.target.value) }))
          }
        />
        <button type="submit">전송</button>
      </form>
      <div>
        이름:{data.name}, 나이:{data.age}
      </div>
    </div>
  );
};

export default Client;
