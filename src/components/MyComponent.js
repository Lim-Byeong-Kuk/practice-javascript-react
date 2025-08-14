import React, { useState } from "react";

export default function MyComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target; // name과 상태 키가 같아야 함
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출 데이터:", formData);
    // TODO: 서버 전송 로직
  };

  const handleReset = () =>
    setFormData({ firstName: "", lastName: "", email: "" });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="전송" />

        <input type="button" onClick={handleReset} value="초기화" />
      </form>

      <div style={{ marginTop: 8 }}>
        현재 firstName: <strong>{firstName}</strong>
      </div>
      <pre style={{ background: "#f5f5f5", padding: 8 }}>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </>
  );
}
