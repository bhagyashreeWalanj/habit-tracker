import React from "react";
import { useGlobalContextProvider } from "@/types/contextApi";
import StatisticHabitCard from "./StatisticHabitCard";

const StatisticsHabitArea = () => {
  const {
    allHabitsObject: { allHabits },
  } = useGlobalContextProvider();
  return (
    <div className="bg-white dark:bg-slate-800 p-4 mt-4 rounded-md">
      {allHabits.map((habit, index) => (
        <div className="" key={index}>
          <StatisticHabitCard habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default StatisticsHabitArea;
