import React, { useState } from "react";
import { studentInputs } from "../../data/columnnames";
import Modal from "../../components/Modal";
import { Timestamp } from "firebase/firestore";

const AddStudentForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputdata = {
      ...studentData,
      id: "akjfoaw8u928379487",
      bod: Timestamp.fromDate(new Date(dateInput)),
    };
    console.log(inputdata);
  };

  // =======================================================================================================
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-900 uppercase">
        Student Add Form
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
                {input.type === "select" ? (
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
                )}
              </div>
            );
          })}
        </div>
        <div className="space-x-3 mt-3">
          <button
            type="submit"
            className={`bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            ADD
          </button>
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

export default AddStudentForm;
