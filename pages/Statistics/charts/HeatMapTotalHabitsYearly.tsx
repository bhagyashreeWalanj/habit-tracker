"use client";

import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { useGlobalContextProvider } from "@/types/contextApi";

import "react-calendar-heatmap/dist/styles.css";
import {
  subYears,
  format,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
} from "date-fns";
import { Tooltip } from "react-tooltip";
import { HabitType } from "@/types/GlobalTypes";

// Custom types
type HabitEntry = {
  date: string;
  count: number;
};

// Generate sample data for a year
const generateYearData = (habit: HabitType[]): HabitEntry[] => {
  //console.log("habit", habit);
  const currentYear = new Date().getFullYear();
  const startDate = startOfYear(new Date(currentYear, 0, 1));
  const endDate = endOfYear(new Date(currentYear, 11, 31));
  const dateMap: { [date: string]: number } = {};
  habit.forEach((singleHabit) => {
    singleHabit.completedDays.forEach((day) => {
      if (dateMap[day.date]) {
        dateMap[day.date]++;
      } else {
        dateMap[day.date] = 1;
      }
    });
  });

  return Object.keys(dateMap).map((date) => ({
    date: format(date, "yyyy-MM-dd"),
    count: dateMap[date], // 0-4 for different intensity levels
  }));
};
const heatMapData: HabitEntry[] = [
  { date: "2025-02-10", count: 2 },
  { date: "2025-02-10", count: 4 },
  { date: "2025-02-06", count: 1 },
  { date: "2025-02-05", count: 0 },
  { date: "2025-02-04", count: 3 },
  { date: "2025-02-03", count: 1 },
  { date: "2025-02-14", count: 5 },
];
// Color scheme based on #c20c1c
const colorScheme = [
  "#fde8ea", // Lightest shade
  "#f8b2b9",
  "#f37c87",
  "#ee4655",
  "#c20c1c", // Original color
  "#9b0916",
];
export default function HeatMapTotalHabitsYearly() {
  const {
    allHabitsObject: { allHabits },
  } = useGlobalContextProvider();
  const [yearData] = useState(generateYearData(allHabits));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const currentYear = new Date().getFullYear();
  const startDate = new Date(currentYear, 0, 1); // January 1st of current year
  const endDate = new Date(currentYear, 11, 31); // December 31st of current year

  return (
    <div className="bg-slate-50 dark:bg-darkBackground text-black dark:text-white p-5 rounded-md m-3 mb-6">
      <div className="w-full  max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          Habit Tracker for {currentYear}
        </h2>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={yearData}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `${value.count > 4} ? color-default : color-scale-${
              value.count
            }`;
          }}
          titleForValue={(value) => {
            if (!value || !value.date) {
              return "No data";
            }
            return `${format(new Date(value.date), "MMMM d, yyyy")}: ${
              value.count
            } habits completed`;
          }}
          showWeekdayLabels
          data-tooltip-id="heatmap-tooltip"
        />
        {isMounted && <Tooltip id="heatmap-tooltip" />}
        {/* Color Legend */}
        <div className="mt-0 left-0">
          {/* <h3 className="text-lg font-semibold mb-2"> Legend</h3> */}
          <div className="flex items-center justify-end space-x-4">
            {colorScheme.map((color, index) => (
              <div key={color} className="flex items-center">
                <div
                  className="w-4 h-4 mr-1"
                  style={{ backgroundColor: color }}
                ></div>
                {color === "#9b0916" ? (
                  <span className="text-sm"> more than 4 habits</span>
                ) : (
                  <span className="text-sm">{index} habits</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .react-calendar-heatmap {
            width: 100%;
            height: auto;
          }
          .react-calendar-heatmap .color-empty :dark {
            fill: #ebedf0;
          }
          .react-calendar-heatmap .color-empty dark:: {
            fill: black;
          }
          .react-calendar-heatmap .color-scale-0 {
            fill: ${colorScheme[0]};
          }
          .react-calendar-heatmap .color-scale-1 {
            fill: ${colorScheme[1]};
          }
          .react-calendar-heatmap .color-scale-2 {
            fill: ${colorScheme[2]};
          }
          .react-calendar-heatmap .color-scale-3 {
            fill: ${colorScheme[3]};
          }
          .react-calendar-heatmap .color-scale-4 {
            fill: ${colorScheme[4]};
          }
          .react-calendar-heatmap .color-default {
            fill: #9b0916;
          }
        `}</style>
      </div>
    </div>
  );
}
