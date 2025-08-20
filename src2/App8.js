import root from "./router/root";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Jo from "./components/Jo";

function App() {
  const f = (i) => {
    console.log(i);
  };

  const k = (obj) => {
    return obj.a.filter((j) => j % 2 == 1).reduce((acc, i) => acc + i, 0);
  };

  return (
    <>
      <Jo a="홍길동" b="3" q={f} r={k} />
    </>
  );
}

export default App;
