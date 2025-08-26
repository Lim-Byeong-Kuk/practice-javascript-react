import React, { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const [queryParams] = useSearchParams(); //use~ 리액트에서 hook이라고 한다 useState ,useParams
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const queryStr = createSearchParams({ page, size }).toString();
  const { tno } = useParams();
  const navigate = useNavigate();
  const moveToModify = useCallback(
    (tno) => {
      navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
    },
    [tno, page, size]
  ); //두번째 인자 (배열)의 변수(tno ,page,size) 가 변경될때만 람다함수 호출됨
  return (
    <div className="text-3xl font-extrabold">
      <div className="text-2xl">Todo Read 페이지 Component {tno}</div>
      <ReadComponent tno={tno}></ReadComponent>
      <div>
        <button onClick={moveToModify}>Test modify</button>
      </div>
    </div>
  );
};

export default ReadPage;
