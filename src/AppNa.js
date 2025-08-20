import { useEffect, useState } from "react";
import {
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
  searchImages,
} from "./api";
const initalForm = { title: "", content: "", imageUrl: "" };
function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initalForm);
  const [editingId, setEditingId] = useState(null);
  const [q, setQ] = useState("");
  const [hits, setHits] = useState([]);
  const [loadingImg, setLoadingImg] = useState(false);
  useEffect(() => {
    (async () => setItems(await fetchItems()))();
  }, []); // 두번째 배열이 비어있으면 람다 함수를 한번만 rendering하는데 배열 내에 변수가 있으면 그 변수값이 변경될때마다 호출된다
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };
  //등록 ,수정 
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("제목 필수");
    if (editingId) {//수정 
      const updated = await updateItem(editingId, form);
      setItems((list) => list.map((i) => (i.id === editingId ? updated : i)));
      setEditingId(null);
    } else {//추가 (생성 )
      const created = await createItem(form);
      setItems((list) => [created, ...list]);
    }
    setForm(initalForm);
    setHits([]);
    setQ("");//초기화 
  };
  const onEdit = (i) => {
    setEditingId(i.id);
    setForm({ title: i.title, content: i.content, imageUrl: i.imageUrl });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onDelete = async (id) => {
    if (!window.confirm("삭제할까요")) return;
    await deleteItem(id);
    setItems((list) => list.filter((i) => i.id !== id));
  };
  const doSearch = async () => {
    setLoadingImg(true);
    try {
      const res = await searchImages(q);
      setHits(res.hits);
    } finally {
      setLoadingImg(false);
    }
  };
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "24px auto",
        padding: 16,
        fontFamily: "system-ui , Arial",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>Pixabay 메모 CRUD (no db) </h1>
      <p style={{ color: "#666" }}>
        노드 메모리 배열에 저장 ,이미지 검색은 서버가 Pixabay 프록시로 호출{" "}
      </p>
      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          gap: 12,
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 3,
        }}
      >
        <div>
          <label>제목</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="제목"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
        </div>
        <div>
          <label>내용</label>
          <input
            name="content"
            value={form.content}
            onChange={onChange}
            placeholder="내용"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
        </div>
        {/* 이미지 선택  */}
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="이미지검색어(예:호랑이)"
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />
            <button
              type="button"
              onClick={doSearch}
              disabled={!q || loadingImg}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: "1px solid #333",
              }}
            >
              {loadingImg ? "검색중" : "검색"}
            </button>
          </div>
        </div>
        {form.imageUrl && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={form.imageUrl}
              alt=""
              style={{ widows: 100, height: 70, objectFit: "cover" }}
            />
            <button type="button" onClick={() => ({ ...p, imageUrl: "" })}>
              이미지 추가{" "}
            </button>
          </div>
        )}
        {hits.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr",
            }}
          >
            {hits.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() =>
                  setForm((p) => ({ ...p, imageUrl: h.webformatURL }))
                }
                title={h.tags}
                style={{
                  padding: 0,
                  border: "1px solid #eee",
                  borderRadius: 10,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#ffff",
                }}
              >
                <img
                  src={h.previewURL}
                  alt={h.tags}
                  style={{
                    width: "100%",
                    height: 100,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #111",
              background: "#111",
              color: "#fff",
            }}
          >
            {editingId ? "수정" : "등록"}
          </button>
        </div>
      </form>

      {/* 목록 */}
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
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => onEdit(it)}
                style={{ padding: "8px 12px" }}
              >
                수정
              </button>
              <button
                onClick={() => onDelete(it.id)}
                style={{ padding: "8px 12px" }}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
