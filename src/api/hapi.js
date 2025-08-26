import axios from "axios";

const A = "http://localhost:8080";
const B = `${A}/api/todo`;

const getOne = async (i) => {
  const { data } = await axios.get(`${B}/${i.tno}`);
  console.log(data);
  return data;
};

const getList = async () => {
  const { data } = await axios.get(`${B}/list`);
  const { dtoList } = data;
  console.log(dtoList);
  return dtoList;
};

const data = [
  {
    dno: 1,
    title: "오늘",
    writer: "이재오",
    dueDate: "2025-08-01",
    img: "https://cdn.pixabay.com/photo/2025/08/17/10/46/bird-9779577_1280.png",
  },
  {
    dno: 2,
    title: "내일",
    writer: "권기현",
    dueDate: "2025-08-02",
    img: "https://cdn.pixabay.com/photo/2025/08/17/22/55/samarkand-9780503_640.jpg",
  },
  {
    dno: 3,
    title: "어제",
    writer: "곽은지",
    dueDate: "2025-08-03",
    img: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg",
  },
];

export { getOne, getList, data };
//data를 이용하여 Jongmin.js 만들어서
//브라우저에 출력하세요

//2) <Link 태그를 활용하고
//useParams() 이용하여
// 해당 데이터만 Nuna 컴포넌트에서 해당 데이터만 출력
