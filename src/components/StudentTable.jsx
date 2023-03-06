import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullSpinner from "./FullSpinner";
import { colHeaders } from "../data/columnnames";
// import Modal from "./Modal";
import dateFormat from "dateformat";
import Paginate from "./Paginate";
import { RxCaretSort } from "react-icons/rx";
import { IoMdTrash } from "react-icons/io";
import { HiPencil } from "react-icons/hi";

const StudentTable = ({
  studentsList,
  isLoading,
  handleSortClick,
  numbers,
}) => {
  // const idFoodRef = useRef();
  // const imgNameRef = useRef();
  // const [modal, setModal] = useState({
  //   isLoading: false,
  //   id: "",
  //   img_name: "",
  // });

  // const handleModal = (isLoading, id, img_name) => {
  //   setModal({
  //     isLoading,
  //     id,
  //     img_name,
  //   });
  // };

  // const handleDelete = (id, img_name) => {
  //   handleModal(true, id, img_name);
  //   idFoodRef.current = id;
  //   imgNameRef.current = img_name;
  // };

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = numbers;

  const indexOfLastPost = currentPage * studentsPerPage;
  const indexOfFirstPost = indexOfLastPost - studentsPerPage;
  const currentStudents = studentsList.slice(indexOfFirstPost, indexOfLastPost);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(studentsList.length / studentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <FullSpinner />;
  }
  return (
    <>
      <div className="bg-white shadow-md rounded-md overflow-hidden relative">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-3 text-left text-gray-500 tracking-wider font-bold"
              >
                Action
              </th>
              {colHeaders &&
                colHeaders.map((item) => (
                  <th
                    key={item.id}
                    scope="col"
                    className="px-6 text-left text-gray-500 tracking-wider font-bold relative"
                  >
                    {item.name}
                    <span
                      className="absolute right-0 top-4 cursor-pointer hover:text-cyan-500"
                      onClick={() => handleSortClick(item.name.toLowerCase())}
                    >
                      <RxCaretSort className="text-lg" />
                    </span>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {studentsList &&
              currentStudents.map((stu) => {
                return (
                  <tr key={stu.id} className="hover:bg-slate-200">
                    <td className="text-sm text-gray-900 px-6 py-2 whitespace-nowrap">
                      <div className="space-x-2 flex">
                        <Link to={`/student/${stu.id}`}>
                          {/* <button className="text-white rounded-md bg-gray-700 px-3 py-1">
                            View
                          </button> */}
                          <HiPencil className="text-xl" />
                        </Link>
                        {/* <button
                          // onClick={() => handleDelete(food.id, food.img_name)}
                          className="text-white rounded-md bg-red-500 px-3 py-1"
                        >
                          Delete
                        </button> */}
                        <IoMdTrash className="text-xl" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Student Avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        John Doe
                      </div>
                      <div className="text-sm text-gray-500">
                        john.doe@example.com
                      </div>
                    </div>
                  </div> */}
                      <div className="text-sm text-gray-900">
                        {stu.fullname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {stu.nickname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {dateFormat(stu.bod.seconds * 1000, "dd/mm/yyyy")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{stu.major}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {stu.passport}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{stu.room}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{stu.status}</div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <Paginate
          studentsPerPage={studentsPerPage}
          totalStudents={studentsList.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>

      {/* {modal.isLoading && (
        <Modal
          title={"Remove food"}
          message={"Are you sure you want to remove this item"}
          cancel_msg={"Cancel"}
          // onModal={areUSureDelete}
          isLoading={modal.isLoading}
        />
      )} */}
    </>
  );
};

export default StudentTable;
