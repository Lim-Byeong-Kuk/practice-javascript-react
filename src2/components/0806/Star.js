import React from "react";
import { useState } from "react";

const Star = ({ inc }) => {
  const [first, setfirst] = useState(["10", "20"]); //use 로 시작하는 모든것을 이액트에서 hook 이라고 한다.
  return (
    <div>
      {/* 버튼이 눌릴때 setfirst 를 실행 */}
      <button onClick={() => setfirst([...first, inc])}>{inc}증가</button>

      <div className="App">홍길동{first[2]}</div>
    </div>
  );
};

export default Star;
