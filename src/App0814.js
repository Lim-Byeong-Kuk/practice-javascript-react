import root from "./router/root";
import "./App.css";
import { useState } from "react";
import MyComponent from "./components/MyComponent";
import YuraEdit from "./components/YuraEdit";
import YuraEditList from "./components/YuraEditList";
import YuraEditOne from "./components/YuraEditOne";

function App() {
  return (
    <>
      <YuraEdit></YuraEdit>
      <hr />
      <YuraEditList />
      <hr />
      <YuraEditOne />
    </>
  );
}

export default App;
