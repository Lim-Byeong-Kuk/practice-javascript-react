// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//===================================
import { createStore } from "redux";

//현재 state는 초기값 0
const reducer = (state = 0, action) => {
  console.log("reducer가 호출되었어요");
  if (action.type === "INCREMENT") {
    console.log("inc");
    return state + 1;
  } else if (action.type === "DECREMENT") {
    console.log("dec");
    return state - 1;
  } else if (action.type === "INCREMENTBY5") {
    console.log("inc5");
    return state + 5;
  } else if (action.type === "DECREMENTBY5") {
    console.log("dec5");
    return state - 5;
  } else {
    console.log("anyone");
    return state; //나중에는 action 에 따라 수정된 state가 반한됨
  }
};

const store = createStore(reducer);

//store에 람다를 등록(subscribe)
store.subscribe(() => {
  console.log("현재 state", store.getState()); //store에 저장되어 있는 state를 얻음
});

store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "INCREMENTBY5",
});
store.dispatch({
  type: "INCREMENTBY5",
});
