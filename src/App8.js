import Jo from "./components/Jo";

function App() {
  const f = (i) => {
    console.log(i); // 여기에서 사랑이 찍히길 바래요
  };
  return (
    <>
      <Jo
        a="홍길동"
        b={3}
        q={f}
        r={(v) => {
          return v.a.filter((i) => i % 2 == 1).reduce((i, j) => i + j);
        }}
      />
    </>
  );
}

export default App;
