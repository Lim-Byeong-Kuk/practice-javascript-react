import root from "./router/root";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Jo from "./components/Jo";
import { useState } from "react";
import Kown from "./components/Kown";

function App() {
  const [data, setData] = useState(0);
  const clickHandlerPlus = (e) => {
    setData(parseInt(data) + 1);
    console.log("+버튼이 눌렸어요", data);
  };

  const clickHandlerMinus = (e) => {
    setData(parseInt(data) - 1);
    console.log("-버튼이 눌렸어요", data);
  };

  const [deleteList, setDeleteList] = useState([]);
  const handleSetDeleteList = (data) => {
    setDeleteList(data);
  };

  return (
    <>
      <div>
        <label>값을 입력하세요</label>
        <input
          type="text"
          placeholder="text 를 입력하세요"
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
        />
        {/* 자식 컴포넌트에 props 전달 */}
        <Kown
          age={data}
          setDeleteList={handleSetDeleteList}
          deleteList={deleteList}
        />
        <button onClick={clickHandlerPlus}>data+1 </button>
        <button onClick={clickHandlerMinus}>data-1</button>
        <div>{data}</div>
        <span>삭제한 사람 목록</span>
        <div>
          {deleteList.map((i) => (
            <span>{i.name}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
