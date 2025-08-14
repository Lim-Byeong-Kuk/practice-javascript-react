import axios from "axios";
import React, { useState } from "react";

export default function YuraEdit() {
  const PORT = 5000;

  var initialForm = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // 이벤트를 잠깐 멈춘다.

    try {
      const res = await axios.post(
        `http://localhost:${PORT}/api/profile`,
        form,
        {
          // method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify(form),
        }
      );

      console.log(res); // 응답을 로그로 찍어보기
      // 찍어봤더니 res 안에 data 안에 message : "ok" 이렇게 되어있다.
      if (res.data.message === "ok") {
        alert("성공적으로 등록 되었어요.");
        setForm(initialForm);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onReset = () => {
    setForm(initialForm);
  };

  return (
    <div style={{ maxWidth: 720, margin: "20px auto", padding: 16 }}>
      <h2>개인정보 & 주소 입력</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        {/* 개인정보 */}
        <div>
          <label>First name</label>
          <br />
          <input name="firstName" value={form.firstName} onChange={onChange} />
        </div>

        <div>
          <label>Last name</label>
          <br />
          <input name="lastName" value={form.lastName} onChange={onChange} />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">저장</button>
          <button type="button" onClick={onReset}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
}
