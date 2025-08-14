import React, { useState } from "react";

const Kown = ({ age, setDeleteList, deleteList }) => {
  console.log("age");
  console.log(age);

  const [data, setData] = useState([
    { name: "홍길동", age: 12 },
    { name: "김말자", age: 13 },
    { name: "김개똥", age: 14 },
    { name: "최수종", age: 15 },
    { name: "이경규", age: 16 },
  ]);

  const handled = () => {
    //필터를 사용하여
    //App 의 입력태그(age) 의 값이 아닌 것을 고르면
    // 삭제 효과가 된다.
    // 삭제를 하면 삭제한 사람 이름을 App.js 에서 <span> 삭제한 사람의 이름 출력 </span>

    setData(data.filter((i) => i.age !== age));
    setDeleteList([...deleteList, data.find((i) => i.age == age)]);
    console.log("deleteList");
    console.log(deleteList);
  };

  return (
    <div>
      {data.map((i) => (
        <div>
          {i.name}, {i.age}
          <button onClick={handled}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Kown;
