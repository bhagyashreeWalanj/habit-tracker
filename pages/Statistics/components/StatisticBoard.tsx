import type React from "react"; // Import React
import StatsCard from "@/components/stats/StatsCard";
import WeeklyBarChart from "../charts/WeeklyBarChart";
import CircularProgress from "@/components/charts/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faChartSimple,
  faCheck,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import StatisticNewBoard from "../StatisticNewBoard";
import WeeklyBarChartByHabits from "../charts/WeeklyBarChartByHabits";

export default function StatisticsBoard() {
  const habits = [
    { name: "Exercise", progress: 85 },
    { name: "Reading", progress: 62 },
    { name: "Meditation", progress: 93 },
    { name: "Coding", progress: 78 },
  ];
  return (
    <>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="mt-3">
          <StatisticNewBoard />
        </div>

        {/* <WeeklyBarChartByHabits /> */}

        {/* Circular Progress Charts */}
        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Habit Progress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {habits.map((habit) => (
              <CircularProgress
                key={habit.name}
                percentage={habit.progress}
                label={habit.name}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
