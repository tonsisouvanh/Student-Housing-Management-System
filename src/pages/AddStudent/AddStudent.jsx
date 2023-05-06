import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import AddStudentForm from "./AddStudentForm";

const AddStudent = () => {
  return (
    <div>
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
          <AddStudentForm />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
