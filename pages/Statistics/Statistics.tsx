import React from "react";
import StatisticsBoard from "./components/StatisticBoard";
import Topbar from "@/components/topbar/Topbar";
import StatisticNewBoard from "./StatisticNewBoard";
import WeeklyBarChart from "./charts/WeeklyBarChart";
import StatisticsHabitArea from "./components/StatisticsHabitArea";
import HeatMapTotalHabitsYearly from "./charts/HeatMapTotalHabitsYearly";

const Statistics = () => {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0 bg-white dark:bg-slate-800">
      <div className="flex-col flex-grow m-3">
        <Topbar
          title="Statistics"
          description={"Track your progress and maintain your streaks"}
        />
        <StatisticNewBoard />
        <HeatMapTotalHabitsYearly />
        <WeeklyBarChart />
        <StatisticsHabitArea />
      </div>
    </div>
  );
};

export default Statistics;
