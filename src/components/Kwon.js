import React, { useState } from "react";

const Kwon = ({ age, f }) => {
  console.log(age);
  const [array, setArray] = useState([
    { name: "홍길동", age: 12 },
    { name: "김말자", age: 13 },
    { name: "김개똥", age: 14 },
    { name: "최수종", age: 15 },
    { name: "이경규", age: 20 },
  ]); //db
  const k = (i) => {
    console.log("k", i);
    if (parseInt(i.age) === age) f(i.name); //db의 나이와 input 태그에 입력한 나이가 같으면
    //함수 호출됨
    return parseInt(i.age) !== age;
  };
  const handled = () => {
    var u = array.filter(k);
    setArray(u);
  };
  return (
    <div>
      {array.map((i) => (
        <div>
          {i.name}, {i.age}
          <button onClick={handled}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Kwon;
