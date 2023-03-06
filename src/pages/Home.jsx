import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import { getStudents, reset } from "../features/Student/StudentSlice";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, students } = useSelector((state) => state.student);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getStudents());
    dispatch(reset());
  }, [isLoading, dispatch]);


  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        {/* Right side content */}
        <div className="w-full overflow-hidden p-5">
          <Topbar />
          {/* <Header /> */}
          <Dashboard isLoading={isLoading} students={students} />
        </div>
      </div>
    </>
  );
};
