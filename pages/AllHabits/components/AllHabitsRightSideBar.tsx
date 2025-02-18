"use client";
import React from "react";
import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MainStatistics";
import MainCalendar from "./RightSideBar/MainCalendar";

const AllHabitsRightSideBar = () => {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white dark:bg-darkBackground">
      <UserProfile />
      <MainStatistics />
      <MainCalendar />
    </div>
  );
};

export default AllHabitsRightSideBar;
