import axios from "axios";
import React, { useState } from "react";

export default function YuraEditList() {
  const PORT = 5000;
  const [memberList, setMemberList] = useState([]);

  const getMemberList = async (e) => {
    e.preventDefault(); // 이벤트를 잠깐 멈춘다.

    try {
      const res = await axios.get(`http://localhost:${PORT}/api/list`, {
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(form),
      });

      console.log("res 로그");
      console.log(res); // 응답을 로그로 찍어보기

      const { data } = res; //destructuring
      console.log("data 로그");
      console.log(data);
      setMemberList(data);
    } catch (err) {
      console.error(err);
    }
  };

  // db 에 delete 를 하고 다시 모든 멤버를 select 해서 가져오는 방법
  // const deleteMemberOne = async (e, yno) => {
  //   e.preventDefault(); // 이벤트를 잠깐 멈춘다.

  //   try {
  //     const res = await axios.get(
  //       `http://localhost:${PORT}/api/delete?yno=${yno}`,
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );

  //     console.log("res 로그");
  //     console.log(res); // 응답을 로그로 찍어보기

  //     const { data } = res; //destructuring
  //     console.log("data 로그");
  //     console.log(data);
  //     setMemberList(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // db 에 delete 만 하고 select 는 안하는 방법으로 해보자
  // 왜? db 연결이 자주 일어나는것은 리소스 낭비가 아닐까?
  const deleteMemberOne = async (e, yno) => {
    e.preventDefault(); // 이벤트를 잠깐 멈춘다.

    try {
      const res = await axios.get(
        `http://localhost:${PORT}/api/delete?yno=${yno}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("res 로그");
      console.log(res); // 응답을 로그로 찍어보기

      const { data } = res; //destructuring
      console.log("data 로그");
      console.log(data);

      // yno 가 다른 회원만 찾아서 set 한다.
      setMemberList(memberList.filter((i) => i.yno !== yno));
    } catch (err) {
      console.error(err);
    }
  };

  // node.js 테스트
  const nodeConnect = async (e) => {
    e.preventDefault(); // 이벤트를 잠깐 멈춘다.

    try {
      const res = await axios.get(`http://localhost:${PORT}/api/a`, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("res 로그");
      console.log(res); // 응답을 로그로 찍어보기

      const { data } = res; //destructuring
      console.log("data 로그");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "20px auto", padding: 16 }}>
      <button onClick={getMemberList}>데이터 가져오기</button>
      {memberList.map((i, index) => (
        <div key={index}>
          {i.yno}, {i.firstName}, {i.lastName}, {i.email}
          <button onClick={(e) => deleteMemberOne(e, i.yno)}>삭제</button>
          {/* <button onClick={deleteMemberOne(e, i.yno)}>삭제</button> */}
        </div>
      ))}
      <hr></hr>
      <button onClick={nodeConnect}>노드 연결 테스트</button>
    </div>
  );
}
