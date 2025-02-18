import React from "react";
import AllHabitsTopbar from "./components/AllHabitsTopbar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import HabitContainer from "./components/HabitContainer";
import HabitsCompleted from "./components/HabitsCompleted";
import AreasContainer from "./components/AreasContainer/AreasContainer";

const AllHabits = () => {
  return (
    <div
      className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-darkBackground"
      id="1"
    >
      <div className="flex-col flex-grow m-3">
        <AllHabitsTopbar />
        <AreasContainer />
        <HabitContainer />
        {/* <HabitsCompleted /> */}
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
};

export default AllHabits;
