"use client";

import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { format, startOfYear, endOfYear } from "date-fns";
import { Tooltip } from "react-tooltip";
import { HabitType } from "@/types/GlobalTypes";

// Custom types
type HabitEntry = {
  date: string;
  count: number;
};

// Generate sample data for a year
const generateYearData = (habit: HabitType): HabitEntry[] => {
  const currentYear = new Date().getFullYear();
  // const startDate = startOfYear(new Date(currentYear, 0, 1));
  // const endDate = endOfYear(new Date(currentYear, 11, 31));
  const dateMap: { [date: string]: number } = {};
  habit.completedDays.forEach((day) => {
    if (dateMap[day.date]) {
      dateMap[day.date]++;
    } else {
      dateMap[day.date] = 1;
    }
  });

  return Object.keys(dateMap).map((date) => ({
    date: format(date, "yyyy-MM-dd"),
    count: dateMap[date], // 0-4 for different intensity levels
  }));
};
// Color scheme based on #c20c1c
const colorScheme = [
  "#fde8ea", // Lightest shade
  "#f8b2b9",
  "#f37c87",
  "#ee4655",
  "#c20c1c", // Original color
];
export default function HeatMapBySingleHabit({ habit }: { habit: HabitType }) {
  const [yearData] = useState(generateYearData(habit));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // generateYearData();
  }, []);
  const currentYear = new Date().getFullYear();
  const startDate = new Date(currentYear, 0, 1); // January 1st of current year
  const endDate = new Date(currentYear, 11, 31); // December 31st of current year

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={yearData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-4`;
        }}
        titleForValue={(value) => {
          if (!value || !value.date) {
            return "No data";
          }
          return `${format(new Date(value.date), "MMMM d, yyyy")}: ${
            habit.name
          } habit completed`;
        }}
        showWeekdayLabels
        data-tooltip-id="heatmap-tooltip"
      />
      {isMounted && <Tooltip id="heatmap-tooltip" />}

      <style jsx global>{`
        .react-calendar-heatmap {
          width: 100%;
          height: auto;
        }
        .react-calendar-heatmap .color-empty {
          fill: #ebedf0;
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
      `}</style>
    </div>
  );
}
