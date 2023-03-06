import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";
import Modal from '../../components/Modal'
import {
  getStudent,
  updateStudent,
  reset,
} from "../../features/Student/StudentSlice";

import { format } from "date-fns";
import { studentInputs } from "../../data/columnnames";
import FullSpinner from "../../components/FullSpinner";

import { toast } from "react-toastify";

const UpdateStudentForm = ({ id }) => {
  const formatDate = (inputDate) => {
    const timestamp = inputDate;
    const date = timestamp.toDate();
    const offset = date.getTimezoneOffset();
    date.setTime(date.getTime() - offset * 60 * 1000);

    return date.toISOString().substr(0, 10);
  };

  const { isSuccess, isError, studentDetail } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [studentData, setStudentData] = useState({
    stuid: "",
    fullname: "",
    nickname: "",
    bod: null,
    sex: "",
    nation: "",
    university: "",
    major: "",
    studyLevel: "",
    studyRange: "",
    phone: "",
    passport: "",
    room: "",
    comment: "",
  });
  const [modal, setModal] = useState(false);
  const [dateInput, setDateInput] = useState(new Date());

  const handleStudentDataChange = (e) => {
    setStudentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getStudent(id));
    dispatch(reset());
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputdata = {
      ...studentData,
      id: id,
      bod: Timestamp.fromDate(new Date(dateInput)),
    };
    console.log(studentData);
    // setModal(true);

    dispatch(updateStudent(inputdata));
    if (isSuccess && !isError) {
      setEditToggle(false);
      toast.success("Student Updated!", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleClickEdit = () => {
    setStudentData(studentDetail);
    setDateInput(studentDetail && formatDate(studentDetail.bod));
    setEditToggle(true);
  };

  const renderCondition = (name, studentDetail) => {
    switch (name) {
      case "stuid":
        return studentDetail.stuid;
      case "fullname":
        return studentDetail.fullname;
      case "nickname":
        return studentDetail.nickname;
      case "bod":
        return format(
          new Date(studentDetail && studentDetail.bod.toDate()),
          "dd-MM-yyyy"
        );
      case "sex":
        return studentDetail.sex;
      case "nation":
        return studentDetail.nation;
      case "university":
        return studentDetail.university;
      case "major":
        return studentDetail.major;
      case "studyLevel":
        return studentDetail.studyLevel;
      case "studyRange":
        return studentDetail.studyRange;
      case "scholaship":
        return studentDetail.scholaship;
      case "phone":
        return studentDetail.phone;
      case "passport":
        return studentDetail.passport;
      case "room":
        return studentDetail.room;
      case "comment":
        return studentDetail.comment;
      default:
        break;
    }
  };

  if (!studentDetail) {
    return <FullSpinner />;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-900 uppercase">
        Student Information
      </h2>
      <div className="mb-4 max-w-[200px] overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Student img"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {studentInputs.map((input) => {
            return (
              <div key={input.name} className="mb-1 md:mb-4">
                <label className="block text-md md:text-lg font-bold text-gray-700 mb-1">
                  {input.label}
                </label>
                {editToggle === true ? (
                  input.type === "select" ? (
                    <select
                      name={input.name}
                      value={studentData[input.name]}
                      onChange={handleStudentDataChange}
                      className="border p-2 w-full outline-none shadow rounded hover:shadow-lg transition duration-300"
                    >
                      {input.options.map((opt) => {
                        return (
                          <option key={opt.optVal} value={opt.optVal}>
                            {opt.optText}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <input
                      key={input.name}
                      type={input.type}
                      name={input.name}
                      className="w-full py-2 px-3 text-gray-700 leading-tight border shadow rounded focus:outline-none focus:shadow-outline hover:shadow-lg transition duration-300"
                      value={
                        input.type === "date"
                          ? dateInput
                          : studentData[input.name]
                      }
                      onChange={
                        input.type === "date"
                          ? (e) => setDateInput(e.target.value)
                          : handleStudentDataChange
                      }
                    />
                  )
                ) : (
                  <p className="w-full text-sm md:text-lg py-2 px-3 text-gray-700 leading-tight border-b-[1px] focus:outline-none focus:shadow-outline">
                    {(studentDetail &&
                      renderCondition(input.name, studentDetail)) || (
                      <span className="text-gray-400">empty</span>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="space-x-3 mt-3">
          <button
            disabled={editToggle && true}
            type="button"
            onClick={handleClickEdit}
            className={`${
              editToggle === true
                ? "cursor-not-allowed bg-gray-300 !important hover:bg-gray-300 !important"
                : ""
            }bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            EDIT
          </button>

          {editToggle && (
            <>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SAVE
              </button>

              <button
                type="button"
                onClick={() => setEditToggle(false)}
                className=" bg-gray-500 hover:bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                CANCEL
              </button>
            </>
          )}
        </div>
      </form>
      {modal && (
        <Modal
          title={"Update Student"}
          message={"Are you sure you want to update this student"}
          cancel_msg={"Cancel"}
          setModal={setModal}
          isLoading={modal}
          actionText={"Save"}
          actionBgColor={"bg-green-"}
        />
      )}
    </div>
  );
};

export default UpdateStudentForm;
