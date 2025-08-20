import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const Loading = <div>Lodading...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={<ClipLoader />}>
          <TodoList></TodoList>
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={<ClipLoader />}>
          <TodoRead></TodoRead>
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<ClipLoader />}>
          <TodoAdd />{" "}
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={<ClipLoader />}>
          <TodoModify />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
