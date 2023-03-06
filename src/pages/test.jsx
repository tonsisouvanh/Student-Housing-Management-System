import React from "react";

const test = () => {
  return (
    <div className="mt-5 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl text-gray-500 font-bold whitespace-nowrap">
          All Students
        </h2>
        <Link to="/admin/addfood">
          <button className="bg-blue-500 text-white px-6 py-1 rounded-md whitespace-nowrap">
            ADD
          </button>
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5 md:hidden">
        {/* {foods && foods.map((food) => <FoodCard key={food.id} food={food} />)} */}
      </div>

      <div className="hidden md:block">
        <StudentTable
        // students={students} loading={loading}
        />
      </div>
    </div>
  );
};

export default test;
