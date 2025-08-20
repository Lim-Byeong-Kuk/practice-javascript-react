import axios from "axios";

const api2 = axios.create({
  baseURL: "http://localhost:5000",
});
//items
// .get 까지 하면  PROMISE 가 반환 get까지 성공하면 .then() 안에 함수 실행
export const fetchItem = () => api2.get("/api/items").then((r) => r.data);
export const createItem = (payload) =>
  api2.get("/api/items", payload).then((r) => r.data);
export const updateItem = (id, payload) =>
  api2.get(`/api/items/${id}`, payload).then((r) => r.data);
export const deleteItem = (id) =>
  api2.delete(`/api/items/${id}`).then((r) => r.data);

//REST API , => CRUD 에 맞도록 방식이 추가, 생성(POST), 수정(put, patch), 삭제(delete), 조회(get)
//without REST API => post, get

export const searchImages = (q) =>
  api2.get("/api/images", { params: { q } }).then((r) => r.data);
