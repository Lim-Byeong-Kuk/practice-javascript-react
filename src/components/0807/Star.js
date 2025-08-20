import axios from "axios";

const Star = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/submit", {
        a: 1,
        b: 20,
      });
      console.log(res.data);
    } catch (error) {
      console.error("전송실패:", error);
    }
  };
  return (
    <div style={{ padding: "2rem" }}>
      {/* {serverData && <div>서버로 받은 데이터 {serverData}</div>} */}
      <h1> 이름입력</h1>
      <button onClick={handleSubmit}>눌러라</button>
    </div>
  );
};

export default Star;
