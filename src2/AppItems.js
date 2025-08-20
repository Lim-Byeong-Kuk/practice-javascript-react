import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () =>
      setItems(
        await axios.get("http://localhost:5000/api/items").then((r) => {
          console.log(r);
          return r.data;
        })
      ))(); //IIFE
  }, []); // 두번째 배열이 비어있으면 람다 함수를 한번만 rendering하는데 배열 내에 변수가 있으면 그 변수값이 변경될때마다 호출된다
  return (
    <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
      {items.length === 0 && (
        <div style={{ color: "#777" }}>등록된 항목이 없습니다.</div>
      )}
      {items.map((it) => (
        <div
          key={it.id}
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr auto",
            gap: 12,
            alignItems: "center",
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <div>
            {it.imageUrl ? (
              <img
                src={it.imageUrl}
                alt=""
                style={{
                  width: 120,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid #eee",
                }}
              />
            ) : (
              <div
                style={{
                  width: 120,
                  height: 80,
                  border: "1px dashed #ddd",
                  borderRadius: 8,
                  display: "grid",
                  placeItems: "center",
                  color: "#aaa",
                }}
              >
                No Image
              </div>
            )}
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>{it.title}</div>
            <div style={{ whiteSpace: "pre-wrap", color: "#444" }}>
              {it.content}
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
              {new Date(it.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
