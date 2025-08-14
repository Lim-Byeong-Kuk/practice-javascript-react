import React, { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  country: "",
};

export default function Yura() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerMsg("");
    setErrors({});
    try {
      const res = await fetch("http://localhost:8080/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json(); // { id, message }
        setServerMsg(`저장 완료! id=${data.id}, message=${data.message}`);
        setForm(initialForm);
      } else if (res.status === 400) {
        const errMap = await res.json(); // { field: "오류메시지" }
        setErrors(errMap);
      } else {
        setServerMsg("서버 오류가 발생했습니다.");
      }
    } catch (err) {
      console.error(err);
      setServerMsg("네트워크 오류가 발생했습니다.");
    }
  };

  const onReset = () => {
    setForm(initialForm);
    setErrors({});
    setServerMsg("");
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
          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName}</div>
          )}
        </div>

        <div>
          <label>Last name</label>
          <br />
          <input name="lastName" value={form.lastName} onChange={onChange} />
          {errors.lastName && (
            <div style={{ color: "red" }}>{errors.lastName}</div>
          )}
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
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div>
          <label>Phone</label>
          <br />
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+82-10-1234-5678"
          />
          {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
        </div>

        {/* 주소 */}
        <div>
          <label>우편번호</label>
          <br />
          <input name="zip" value={form.zip} onChange={onChange} />
          {errors.zip && <div style={{ color: "red" }}>{errors.zip}</div>}
        </div>

        <div>
          <label>기본주소</label>
          <br />
          <input name="address1" value={form.address1} onChange={onChange} />
          {errors.address1 && (
            <div style={{ color: "red" }}>{errors.address1}</div>
          )}
        </div>

        <div>
          <label>상세주소</label>
          <br />
          <input name="address2" value={form.address2} onChange={onChange} />
          {errors.address2 && (
            <div style={{ color: "red" }}>{errors.address2}</div>
          )}
        </div>

        <div>
          <label>도시</label>
          <br />
          <input name="city" value={form.city} onChange={onChange} />
          {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}
        </div>

        <div>
          <label>시/도</label>
          <br />
          <input name="state" value={form.state} onChange={onChange} />
          {errors.state && <div style={{ color: "red" }}>{errors.state}</div>}
        </div>

        <div>
          <label>국가</label>
          <br />
          <input name="country" value={form.country} onChange={onChange} />
          {errors.country && (
            <div style={{ color: "red" }}>{errors.country}</div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">저장</button>
          <button type="button" onClick={onReset}>
            초기화
          </button>
        </div>
      </form>

      {serverMsg && <p style={{ marginTop: 12 }}>{serverMsg}</p>}
    </div>
  );
}
