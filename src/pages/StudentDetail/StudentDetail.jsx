import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import UpdateStudentForm from "./UpdateStudentForm";

const StudentDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5 relative">
        <Topbar />
        {/* <div className="w-fit fixed top-0">
          <Link to="/students" className="">
            <TiArrowLeftThick className="text-3xl text-gray-400" />
          </Link>
        </div> */}
        <UpdateStudentForm id={id} />
      </div>
    </div>
  );
};

export default StudentDetail;
