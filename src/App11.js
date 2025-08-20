import { useState } from "react";
import Kwon from "./components/Kwon";

function App() {
  const [data, setData] = useState(0);
  const [name, setName] = useState("");
  const clickHandler = (e) => {
    console.log("버튼이 눌렸어요", data);
    setData(parseInt(data));
  };
  const f = (v) => {
    console.log(v);
    setName(v);
  };
  return (
    <>
      <div>
        <label>값을 입력하세요</label>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
        />
        <Kwon age={data} f={f} />
        <button onClick={clickHandler}>등록</button>
        <div>{data}</div>
        <span>삭제한 사람의 이름이 여기에 출력{name} </span>
      </div>
    </>
  );
}

export default App;
