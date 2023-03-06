import { MdComputer } from "react-icons/md";
import { SiVectorlogozone } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { HiOutlineMenu } from "react-icons/hi";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // const [dropDownToggle, setDropdownToggle] = useState<boolean>(false);
  // const [dropDown, setDropdown] = useState<string>("");

  // const handleClick = (event: any) => {
  //   setDropdown(event.currentTarget.id);
  //   setDropdownToggle(!dropDownToggle);
  // };

  return (
    <div
      className={`h-screen sticky top-0 transition-all bg-gray-900 text-white ${
        open ? "py-5 px-8" : "p-4"
      } lg:p-6 lg:w-[300px]`}
    >
      <div className="flex justify-end">
        <HiOutlineMenu
          onClick={() => setOpen(!open)}
          className={`cursor-pointer text-white bg-gray-900 h-[50px] rounded-md text-xl transition-all 
        ${
          !open
            ? "top-[23px] right-[-10px]"
            : "rotate-180 top-[15px] right-[-10px]"
        } lg:hidden`}
        />
      </div>
      {/* Desktop sidebar */}
      <div className={`hidden lg:flex lg:flex-col lg:gap-5`}>
        <div className="relative">
          <h2 className="text-lg font-bold lg:text-2xl">VNUDormitory</h2>
        </div>
        <div className="">
          <ul>
            <Link to="/">
              <li className="flex cursor-pointer transition hover:opacity-70 text-md items-center gap-2 lg:text-lg">
                <MdComputer />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <ul className="space-y-5 lg:text-lg">
            <Link to="/students">
              <li className="flex cursor-pointer transition hover:opacity-70 items-center gap-2">
                <MdOutlinePersonOutline className="text-xl" />
                Students
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <ul className="space-y-5 lg:text-lg">
            <Link to="/students">
              <li className="flex cursor-pointer transition hover:opacity-70 items-center gap-2">
                <TbReportSearch className="text-xl" />
                Report
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile nav */}
      {open ? (
        // Open sidebar
        <div className={`flex flex-col gap-5 lg:hidden`}>
          <div className="relative">
            <h2 className="text-lg font-bold">VNUDormitory</h2>
          </div>
          <div className="">
            <ul>
              <Link to="/">
                <li className="flex text-md items-center gap-2">
                  <MdComputer />
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-5">
              <Link to="/students">
                <li className="flex cursor-pointer transition hover:opacity-70 items-center gap-2">
                  <MdOutlinePersonOutline className="text-xl" />
                  Students
                </li>
              </Link>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-5">
              <Link to="/students">
                <li className="flex cursor-pointer transition hover:opacity-70 items-center gap-2">
                  <TbReportSearch className="text-xl" />
                  Report
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        // Closed sidebar
        <div
          className={`flex flex-col gap-5 ${
            open ? "" : "justify-center items-center"
          } lg:hidden`}
        >
          <div className="mb-5">
            <SiVectorlogozone />
          </div>
          <div className="">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MdComputer className="text-xl" />
              </li>
              <li className="flex items-center gap-2">
                <MdOutlinePersonOutline className="text-xl" />
              </li>
              <li className="flex items-center gap-2">
                <TbReportSearch className="text-xl" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
