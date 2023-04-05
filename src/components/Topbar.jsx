import { useDispatch } from "react-redux";
import { logoutUser } from "../features/Auth/AuthSlice";

const Topbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="w-full flex flex-col gap-3 justify-center">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-sm md:text-xl text-blue-900 uppercase">
          Vietname National University Dormitory - Lao Students
        </h1>
        <div className="group cursor-pointer relative w-[40px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />

          <ul className="select-none outline-none absolute hidden z-10 group-hover:flex group-hover:flex-col  space-y-2 top-10 right-0 bg-white border shadow-md p-3 rounded-md">
            <li className="hover:text-gray-500 cursor-pointer text-lg whitespace-nowrap">
              View profile
            </li>
            <li
              onClick={handleLogout}
              className="hover:text-gray-500 text-red-500 cursor-pointer text-lg whitespace-nowrap"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex rounded-lg items-center gap-2 border px-2 py-1">
        <BsSearch />
        <input className="flex-1 outline-none" type="text" placeholder="Search for student" />
      </div> */}
    </div>
  );
};

export default Topbar;
