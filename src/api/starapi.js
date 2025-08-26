import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/star`;

//데이터 단일 조회
export const getOne = async (sno) => {
  const { data } = await axios.get(`${prefix}/${sno}`);
  console.log(data);
  return data;
};
//전체 조회 (페이지 처리)
export const getList = async () => {
  const { data } = await axios.get(`${prefix}/list`);
  const { dtoList } = data;
  console.log(dtoList);
  return dtoList;
};
//전체 조회
export const getList2 = async () => {
  const { data } = await axios.get(`${prefix}/list2`);
  console.log(data);
  return data;
};
//데이터 추가
export const addOne = async (form) => {
  const { data } = await axios.post(`${prefix}/add`, form);
  console.log(data);
  return data;
};
//데이터 삭제
export const deleteOne = async (sno, setSList) => {
  const { data } = await axios.get(`${prefix}/delete/${sno}`);
  console.log(data);
  setSList(data);
};
