import React from "react";
import AllHabitsTopbar from "./components/AllHabitsTopbar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import HabitContainer from "./components/HabitContainer";
import AreasContainer from "./components/AreasContainer/AreasContainer";

const AllHabits = () => {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-darkBackground">
      <div className="flex-col flex-grow m-3">
        <AllHabitsTopbar />
        <AreasContainer />
        <HabitContainer />
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
};

export default AllHabits;
