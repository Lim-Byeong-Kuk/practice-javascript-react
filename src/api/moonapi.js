import axios from "axios";

const prefix = `http://localhost:8080`;

const moon = async (setMoonData) => {
  const res = await axios.get(`${prefix}/l`);
  console.log(res);
  const { data } = res;
  console.log(data);
  setMoonData(data);
};

export { moon };
