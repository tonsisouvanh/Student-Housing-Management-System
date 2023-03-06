import React from "react";
import { FaUsers } from "react-icons/fa";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
const Dashboard = ({ isLoading, students }) => {
  if (isLoading) {
    return <h1>loading....</h1>;
  }
  return (
    <div className="flex flex-col h-screen mt-5">
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 rounded-md">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <FaUsers className="h-8 w-8 text-white" />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700 flex gap-3 items-center">
                      <div className="text-sm flex space-x-2">
                        <span className="flex items-center text-2xl">
                          <BiMaleSign className="text-cyan-600" />
                          {
                            students.filter(
                              (stu) =>
                                stu.nation.toUpperCase() === "LAO" &&
                                stu.sex.toUpperCase() === "M"
                            ).length
                          }
                        </span>
                        <span className="flex items-center text-2xl">
                          <BiFemaleSign className="text-pink-600" />
                          {
                            students.filter(
                              (stu) =>
                                stu.nation.toUpperCase() === "LAO" &&
                                stu.sex.toUpperCase() === "FM"
                            ).length
                          }
                        </span>
                      </div>
                    </h4>
                    <div className="text-gray-500 whitespace-nowrap">
                      All Students
                      <span className="text-black">
                        :{" "}
                        {
                          students.filter(
                            (stu) => stu.nation.toUpperCase() === "LAO"
                          ).length
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                    <FaInfoCircle className="h-8 w-8 text-white" />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {
                        students.filter(
                          (stu) =>
                            stu.nation.toUpperCase() === "LAO" &&
                            stu.studyLevel.toUpperCase() === "ĐH"
                        ).length
                      }
                    </h4>
                    <div className="text-gray-500">ĐẠI HỌC</div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                    <FaInfoCircle className="h-8 w-8 text-white" />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {
                        students.filter(
                          (stu) =>
                            stu.nation.toUpperCase() === "LAO" &&
                            stu.studyLevel.toUpperCase() === "THS"
                        ).length
                      }
                    </h4>
                    <div className="text-gray-500">THẠC SĨ</div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-cyan-600 bg-opacity-75">
                    <FaInfoCircle className="h-8 w-8 text-white" />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {
                        students.filter(
                          (stu) =>
                            stu.nation.toUpperCase() === "LAO" &&
                            stu.comment.toUpperCase() === "TỰ TÚC"
                        ).length
                      }
                    </h4>
                    <div className="text-gray-500">Tự túc</div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-cyan-600 bg-opacity-75">
                    <FaInfoCircle className="h-8 w-8 text-white" />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {
                        students.filter(
                          (stu) =>
                            stu.nation.toUpperCase() !== "LAO"
                        ).length
                      }
                    </h4>
                    <div className="text-gray-500">Foreigner</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8"></div>

          <div className="flex flex-col mt-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://i.pravatar.cc/150?img=1"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Jane Cooper
                              </div>
                              <div className="text-sm text-gray-500">
                                jane.cooper@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            Regional Paradigm Technician
                          </div>
                          <div className="text-sm text-gray-500">
                            Optimization
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-800">
                            Edit
                          </button>
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
