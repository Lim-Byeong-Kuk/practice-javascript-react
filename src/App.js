import B from "./components/B";
import C from "./components/C";
import Eunji from "./components/Eunji";
import Hyungwoo from "./components/Hyungwoo";
import Jongmin from "./components/Jongmin";
import Nuna from "./components/Nuna";
import Star from "./components/Star";
import StarAdd from "./components/StarAdd";
import StarList from "./components/StarList";
import StarList2 from "./components/StarList2";
import StarOne from "./components/StarOne";
import root from "./router/root";
import { Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/a" element={<Hyungwoo />}></Route>
      <Route path="/b" element={<Eunji />}></Route>
      <Route path="/c" element={<Jongmin />}></Route>
      <Route path={`/c/:dno`} element={<Nuna />}></Route>
      <Route path="/star" element={<Star />}></Route>
      <Route path="/star/:sno" element={<StarOne />}></Route>
      <Route path="/star/add" element={<StarAdd />}></Route>
      <Route path="/star/list" element={<StarList />}></Route>
      <Route path="/star/list2" element={<StarList2 />}></Route>
      {/* <Route path="/u" element={<B />}></Route> */}
      <Route path="/c2" element={<C />}></Route>
    </Routes>
  );
}

export default App;
