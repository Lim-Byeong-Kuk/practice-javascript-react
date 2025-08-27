import StarMoon from "./components/0827_2/StarMoon";
import root from "./router/root";
import { Route, RouterProvider, Routes } from "react-router-dom";

function App3() {
  return (
    <Routes>
      <Route path="/cc" element={<StarMoon />}></Route>
    </Routes>
  );
}

export default App3;
