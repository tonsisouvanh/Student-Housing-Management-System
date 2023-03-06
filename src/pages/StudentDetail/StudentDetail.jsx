import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { TiArrowLeftThick } from "react-icons/ti";
import UpdateStudentForm from "./UpdateStudentForm";

const StudentDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Topbar />
        <div className="w-fit mt-2">
          <Link to="/students" className="">
            <TiArrowLeftThick className="text-[20px] mb-2" />
          </Link>
        </div>
          <UpdateStudentForm id={id} />
      </div>
    </div>
  );
};

export default StudentDetail;
