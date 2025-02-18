import React from "react";
import WorkoutStatistics from "./WorkoutStatistics";
import Topbar from "@/components/topbar/Topbar";

const WorkoutContainer = () => {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-slate-800">
      <div className="flex-col flex-grow m-3">
        <Topbar
          title="Workout"
          description={"Track your progress and maintain your streaks"}
        />
        <WorkoutStatistics />
      </div>
    </div>
  );
};
export default WorkoutContainer;
