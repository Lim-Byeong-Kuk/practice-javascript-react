import root from "./router/root";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return <RouterProvider router={root}></RouterProvider>;
}

export default App;
