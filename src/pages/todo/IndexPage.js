import React, { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();
  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  });
  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });

  //useCallback , useMemo => 한번 데이터 가져오면 기존의 데이터 유지
  //callback은 함수를 재활용 , useMemon 데이터 재활용
  return (
    <BasicLayout>
      <div className="w-full flex m-2 p-2">
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickList}
        >
          목록
        </div>
        <div
          className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
          onClick={handleClickAdd}
        >
          추가
        </div>
        <div className="flex flex-wrap w-full">
          <Outlet />
        </div>
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
