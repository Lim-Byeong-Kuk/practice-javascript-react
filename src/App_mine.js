import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(""); // 입력값 상태
  const [todos, setTodos] = useState([]); // 할일 목록 상태

  //할일 추가
  const handleAdd = () => {
    if (input.trim() === "") return; // 문자열 공백제거(trim)
    setTodos([...todos, input]); //입력값을 배열에 추가
    setInput(""); // input 태그 초기화
  };

  //할일 삭제
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); //index가 i와 같지 않은것만 골라내므로 삭제하는 효과
    setTodos(newTodos);
  };
  return (
    <div>
      <div style={{ pading: 20 }}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
        <ul>
          {todos.map((todo, index) => {
            <li key={index}>
              {todo}
              <button
                onClick={() => handleDelete(index)}
                style={{ color: "red" }}
              >
                삭제
              </button>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
