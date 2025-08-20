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
      console.log("res:", res);
      console.log(res.data);
      const { message } = res.data;
      console.log(message);
      setServerData(message);
      alert(
        "이름이 백엔드에 전송되었어요 나중에  db와 backend에서 연동이 되겠죠?"
      );
    } catch (error) {
      console.error("전송실패:", error);
    }
    //다 하신분은 frontend에서 버튼을 누르면
    //backend의 li 배열의 다음 객체의 숫자를 frontend에 전송하세요
  };
  return (
    <div style={{ padding: "2rem" }}>
      {/* {serverData && <div>서버로 받은 데이터 {serverData}</div>} */}
      <h1> 이름입력</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.name}
          placeholder="이름을 입력하세요"
          onChange={(e) => setData((i) => ({ ...i, name: e.target.value }))}
        />
        <input
          type="number"
          value={data.age}
          placeholder="이름을 입력하세요"
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
