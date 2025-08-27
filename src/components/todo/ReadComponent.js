import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import Badge from "../style/Badge";
import Field from "../style/Field";
import useCustomMove from "../../hooks/useCustomMove";
import ListComponent from "./ListComponent";

const initialState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initialState);
  const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">할 일 상세</h2>
        <Badge complete={todo.complete} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <Field label="번호" value={todo.tno} />
        <Field label="작성자" value={todo.writer} />
        <Field label="제목" value={todo.title} />
        <Field
          label="마감일"
          value={
            todo.dueDate
              ? new Date(todo.dueDate).toLocaleDateString()
              : "기한 없음"
          }
        />
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="rounded p-4 m-2 w-32 text-white bg-blue-500"
            onClick={() => moveToList()}
          >
            목록
          </button>
          <button
            type="button"
            className="rounded p-4 m-2 w-32 text-white bg-red-500"
            onClick={() => moveToModify(tno)}
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadComponent;
