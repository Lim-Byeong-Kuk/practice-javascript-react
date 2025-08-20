import { createStore } from "redux";

//현재 state는 초기값 0
const reducer = (state = 0, action) => {
  console.log("reducer가 호출되었어요");
  return state; //나중에는 action 에 따라 수정된 state가 반한됨
};

const store = createStore(reducer);

//store에 람다를 등록(subscribe)
store.subscribe(() => {
  console.log("현재 state", store.getState()); //store에 저장되어 있는 state를 얻음
});
