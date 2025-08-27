import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  const [queryParams] = useSearchParams(); //use~ 리액트에서 hook이라고 한다 useState ,useParams
  //page 쿼리가 없으면 1, size 쿼리가 없으면 10
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">
        Todo List 페이지 Component {page}---{size}
        <ListComponent />
      </div>
    </div>
  );
};

export default ListPage;
