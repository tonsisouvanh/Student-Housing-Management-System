import React from "react";
import {
  FaUser,
  FaCalendar,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19c0 1.104-.896 2-2 2s-2-.896-2-2h4zm-5 0c0 1.104-.896 2-2 2s-2-.896-2-2h4zm7-12v-.01M7 7v-.01"
                    />
                  </svg>
                </button>

                <div className="ml-3 relative">
                  <div>
                    <button
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <FaUser className="h-6 w-6 text-gray-400" />
                      <span className="ml-2 text-gray-700 font-medium">
                        John Doe
                      </span>
                    </button>
                  </div>
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              Calendar
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 sm:px-6">
              <div className="flex-shrink-0">
                <FaUser className="h-10 w-10 rounded-full text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  John Doe
                </div>
                <div className="text-sm font-medium text-gray-500">
                  johndoe@example.com
                </div>
              </div>
              <button
                className="ml-auto flex-shrink-0 bg-white p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6 block"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19c0 1.1-.9 2-2 2s-2-.9-2-2h4zM8 17v-2a4 4 0 0 1 8 0v2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11v-1a6 6 0 0 1 12 0v1"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
