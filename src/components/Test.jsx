import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="bg-gray-900 h-screen w-64 fixed z-10 top-0 left-0 overflow-y-auto">
      <div className="flex items-center justify-center mt-10">
        <Link to="/" className="text-white text-3xl font-semibold uppercase">
          My Website
        </Link>
      </div>

      <nav className="mt-10">
        <Link
          to="/"
          className="flex items-center mt-4 py-2 px-6 bg-gray-800 bg-opacity-25 text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
              clipRule="evenodd"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          to="/students"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 4a1 1 0 011-1h8a1 1 0 011 1v1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2v1a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1zm2 0v6h6V7H6zm8 0a1 1 0 011 1v2a1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6H8a1 1 0 01-1-1V8a1 1 0 011-1h7z"
              clipRule="evenodd"
            />
          </svg>
          Students
        </Link>
        <Link
          to="/courses"
          className="flex items-center mt-4 py-2 px-6 text-gray-400 hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 5v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8h1v6h10V8h1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V8H4zm4-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V7zm6 0a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z"
              clipRule="evenodd"
            />
          </svg>
          Courses
        </Link>
      </nav>
    </div>
  );
};

export default Test;
