import React from "react";
const Paginate = ({
  studentsPerPage,
  totalStudents,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full my-6">
      <ul
        // className="btn-group flex flex-wrap justify-center align-middle gap-2 md:gap-5"
        className="btn-group flex flex-wrap justify-center align-middle"
      >
        <li
          onClick={previousPage}
          className="btn py-[2px] px-1 text-[10px]"
          // className="text-xs cursor-pointer px-2 py-1 ml-0 leading-tight text-gray-500 bg-white border border-gray-400 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </li>
        {/* <div className="btn-group">
          <input type="radio" name="options" data-title="1" className="btn" />
          <input
            type="radio"
            name="options"
            data-title="2"
            className="btn"
            checked
          />
          <input type="radio" name="options" data-title="3" className="btn" />
          <input type="radio" name="options" data-title="4" className="btn" />
        </div> */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={` py-1 px-1 text-[10px]
            ${
              currentPage === number
                ? "dark:bg-gray-700 text-white"
                : "text-gray-500"
            } btn`}
            // className={`${
            //   currentPage === number
            //     ? "dark:bg-gray-700 text-white"
            //     : "text-gray-500"
            // } text-xs cursor-pointer px-2 py-1 ml-0 leading-tight border border-gray-400 rounded hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className="btn py-1 px-1 text-[10px]"
          // className="text-xs cursor-pointer px-2 py-1 ml-0 leading-tight text-gray-500 bg-white border border-gray-400 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
