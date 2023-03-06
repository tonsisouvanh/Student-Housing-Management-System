import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StudentTable from "../components/StudentTable";
import { IoSearchCircleSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { getStudents, reset } from "../features/Student/StudentSlice";
import StudentCard from "../components/StudentCard";

const StudentList = () => {
  const dispatch = useDispatch();
  const { isLoading, students } = useSelector((state) => state.student);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [numbers, setNumbers] = useState(10);


  useEffect(() => {
    dispatch(getStudents());
    dispatch(reset());
  }, [isLoading, dispatch]);

  const handleSortClick = (sortByProp) => {
    if (sortByProp === sortBy) {
      setSortOrder((prevSortOrder) =>
        prevSortOrder === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(sortByProp);
      setSortOrder("asc");
    }
  };

  const filteredStudents = students.filter((student) => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return searchTerms.every((term) =>
      Object.values(student).some((value) =>
        value.toString().toLowerCase().includes(term)
      )
    );
  });

  const sortedStudents = [...filteredStudents];

  if (sortBy) {
    sortedStudents.sort((a, b) => {
      const valueA =
        typeof a[sortBy] === "string" ? a[sortBy].toLowerCase() : a[sortBy];
      const valueB =
        typeof b[sortBy] === "string" ? b[sortBy].toLowerCase() : b[sortBy];
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  return (
    <div className="flex relative">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5 flex flex-col gap-2">
        <Topbar />
        <div className={`flex flex-col items-start gap-2 bg-gray-100 p-3 rounded-lg md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center text-gray-600">
            <label htmlFor="sort-select" className="mr-2 whitespace-nowrap">
              Show:
            </label>
            <select
              id="sort-select"
              value={numbers || "10"}
              onChange={(e) => setNumbers(parseInt(e.target.value))}
              className="rounded-lg border-gray-200 border-2 p-1 bg-white focus:outline-none"
            >
              <option value=""></option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="w-full md:max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                className="block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:outline-none focus:bg-white focus:border-gray-300"
              />
              <div className="absolute text-3xl right-0 -top-1 mt-2 mr-2">
                <IoSearchCircleSharp />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          {/* <div className="mt-5 grid grid-cols-2 gap-4"> */}
          {/* {students &&
              sortedStudents
                .slice(0, numbers)
                .map((student) => (
                  <StudentCard key={student.id} student={student} />
                ))} */}

          <StudentCard
            studentsList={sortedStudents}
            loading={isLoading}
            handleSortClick={handleSortClick}
            numbers={numbers}
          />
          {/* </div> */}
        </div>

        {/* Desktop view */}
        <div className="hidden md:block">
          <StudentTable
            studentsList={sortedStudents}
            loading={isLoading}
            handleSortClick={handleSortClick}
            numbers={numbers}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
