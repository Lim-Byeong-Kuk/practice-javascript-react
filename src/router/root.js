import { Children, lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";
import todoRouter from "./todoRouter";
const { createBrowserRouter } = require("react-router-dom");
// const Loading = <div>Loading ...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));

//Suspense 중지 , Main Component 가져오기 전에는  Loading 을 띄운다
const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
