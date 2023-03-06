import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import Modal from "./Modal";

import { BsPersonSquare } from "react-icons/bs";
import Paginate from "./Paginate";
import { format } from "date-fns";

const StudentCard = ({ studentsList, isLoading, handleSortClick, numbers }) => {
  const idFoodRef = useRef();
  const imgNameRef = useRef();
  const [modal, setModal] = useState({
    isLoading: false,
    id: "",
    img_name: "",
  });

  const handleModal = (isLoading, id, img_name) => {
    setModal({
      isLoading,
      id,
      img_name,
    });
  };

  const handleDelete = (id, img_name) => {
    handleModal(true, id, img_name);
    idFoodRef.current = id;
    imgNameRef.current = img_name;
  };

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

  return (
    <div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {studentsList &&
          currentStudents.map((student) => {
            return (
              <div
                key={student.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Student img"
                  className="w-full h-35 object-cover"
                />
                <div className="text-xs p-4">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2 h-[33px]">
                      {student.fullname}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">DOB:</span>{" "}
                      {format(
                        new Date(student && student.bod.toDate()),
                        "dd-MM-yyyy"
                      )}
                    </p>
                    <p className="text-gray-700 mb-2 h-[33px]">
                      <span className="font-medium">Major:</span>{" "}
                      {student.major}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Status:</span> {student.comment}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-end gap-2">
                      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            View
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button> */}
                      <Link to={`/student/${student.id}`}>
                        <button className="text-[10px] text-white rounded-md bg-gray-700 px-2 py-1">
                          View
                        </button>
                      </Link>
                      <button
                        onClick={() =>
                          handleDelete(student.id, student.img_name)
                        }
                        className="text-[10px] text-white rounded-md bg-red-500 px-2 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Paginate
        studentsPerPage={studentsPerPage}
        totalStudents={studentsList.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default StudentCard;
