import axios from "axios";

const API_SERVER_HOST = `http://localhost:8080`;
const prefix = `${API_SERVER_HOST}/api/todo`;

const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};
const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, { params: { page, size } });
  return res.data;
};
const postAdd = async (todoObj) => {
  const res = await axios.post(`${prefix}/`, todoObj);
  return res.data;
};

export { API_SERVER_HOST, getOne, getList, postAdd };
