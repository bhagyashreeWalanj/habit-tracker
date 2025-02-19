"use client";

import { HabitType } from "@/types/GlobalTypes";
import { calculateStreak, getCurrentDayName } from "@/utils/DateFunctions";
import React, { useState, useEffect } from "react";
import { Pie, Cell, PieChart, Label } from "recharts";
import { useGlobalContextProvider } from "@/types/contextApi";

type statsInfo = {
  id: number;
  num: number;
  subTitle: string;
};

const MainStatistics = () => {
  const [progress, setProgress] = useState<number>(0);
  const [statisticsInfo, setStatisticsInfo] = useState<statsInfo[]>([
    { id: 1, num: 7, subTitle: "Total Best Streaks" },
    { id: 2, num: 10, subTitle: "Total Perfect Days" },
  ]);

  // const statisticsInfo = [
  //   { id: 1, num: 7, subTitle: "Total Best Streaks" },
  //   { id: 2, num: 10, subTitle: "Total Perfect Days" },
  // ];

  const {
    allHabitsObject: { allHabits },
    selectedCurrentDateObject: { selectedCurrentDate },
  } = useGlobalContextProvider();

  const calculateThePercentageOfTodaysProgress = (allHabits: HabitType[]) => {
    if (allHabits.length === 0 || !selectedCurrentDate) {
      return 0;
    }

    let totalHabitsOfCompletedDays = 0;
    let totalAllHabitsOfCurrentDay = 0;

    if (allHabits) {
      const completedHabitsOfCurrentDate = allHabits.filter((habit) => {
        return habit.completedDays.some(
          (day) => day.date === selectedCurrentDate
        );
      });

      totalHabitsOfCompletedDays = completedHabitsOfCurrentDate.length;
      const getTwoLettersOfCurrentDay = getCurrentDayName(
        selectedCurrentDate
      ).slice(0, 2);

      const allHabitsOfCurrentDay = allHabits.filter((habit) => {
        return habit.frequency.days.some(
          (day) => day === getTwoLettersOfCurrentDay
        );
      });
      totalAllHabitsOfCurrentDay = allHabitsOfCurrentDay.length;

      const result = Math.round(
        (totalHabitsOfCompletedDays / totalAllHabitsOfCurrentDay) * 100
      );

      if (result === undefined || isNaN(result)) {
        return 0;
      }
      return result;
    }
    return 0;
  };

  function calculateTotalPerfectDays(habit: HabitType[]) {
    const dateCounts: { [key: string]: number } = {};

    habit.forEach((habit) => {
      habit.completedDays.forEach((day) => {
        const date = day.date;
        if (dateCounts[date]) {
          dateCounts[date] += 1;
        } else {
          dateCounts[date] = 1;
        }
      });
    });

    let perfectDaysCount = 0;
    const totalHabitsInEachDay: { [key: string]: number } = {};
    const uniqueDates = Object.keys(dateCounts);
    for (const date of uniqueDates) {
      const getTwoFirstDayLetter = getCurrentDayName(date).slice(0, 2);

      const numberOfHabitsEachDays = habit.filter((singleHabit) => {
        return singleHabit.frequency.days.some(
          (day) => day === getTwoFirstDayLetter
        );
      });

      totalHabitsInEachDay[date] = numberOfHabitsEachDays.length;
    }
    for (const date in totalHabitsInEachDay) {
      if (totalHabitsInEachDay[date] === dateCounts[date]) {
        perfectDaysCount++;
      }
    }
    return perfectDaysCount;
  }

  useEffect(() => {
    setProgress(calculateThePercentageOfTodaysProgress(allHabits));
  }, [selectedCurrentDate, allHabits]);

  useEffect(() => {
    const streaks = allHabits.map((habit) => calculateStreak(habit));
    const totalStreak = streaks.reduce((a, b) => a + b, 0);

    const perfectDays = calculateTotalPerfectDays(allHabits);
    const copyStatsInfo = [...statisticsInfo];
    copyStatsInfo[0].num = totalStreak;
    copyStatsInfo[1].num = perfectDays;
    setStatisticsInfo(copyStatsInfo);
  }, [allHabits]);

  return (
    <div className="flex mx-4 flex-col gap-6 justify-center items-center mt-14 bg-slate-50 dark:bg-slate-800 text-primary dark:text-white rounded-xl  p-5 pt-7">
      <span className="font-bold text-xl cursor-pointer hover:text-primary">
        Statistics
      </span>

      {/* circular progress bar */}
      <div className="relative pt-3">
        <CircularProgressBar
          progress={progress}
          total={100}
          label="Current Progress"
        />

        {/* <div className="flex flex-col justify-center items-center absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold text-xl ">89%</span>
          <span className="text-[11px]">{`Today's Progress`}</span>
        </div> */}
      </div>
      {/* Best streaks and perfect days */}
      <div className="my-4 flex justify-center gap-6 flex-wrap items-center w-full">
        {statisticsInfo.map((singleItem, singleItemIndex) => (
          <div className="flex items-center gap-3" key={singleItemIndex}>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="text-[12px]">
              <span className="flex flex-col font-bold">{singleItem.num}</span>
              <span className="text-gray-500">{singleItem.subTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainStatistics;

interface CircularProgressBarProps {
  progress: number;
  total: number;
  label?: string;
}

export const CircularProgressBar = ({
  progress,
  total,
  label,
}: CircularProgressBarProps) => {
  const data = [
    { name: "progress", value: progress },
    { name: "Remaining", value: total - progress },
  ];
  const COLORS = ["hsl(var(--piechart-default))", "#edf2f4"];
  return (
    <PieChart
      width={200}
      height={160}
      margin={{ top: -20, right: 0, bottom: 40, left: 0 }}
    >
      <Pie
        data={data}
        cx={100}
        cy={100}
        startAngle={180}
        endAngle={-180}
        innerRadius={66}
        outerRadius={progress === 100 ? 80 : 78}
        fill="#8884d8"
        paddingAngle={0}
        dataKey={"value"}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          className="text-sm "
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-base font-bold"
                  >
                    {`${progress}%`}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground text-sm"
                  >
                    {label}
                  </tspan>
                </text>
              );
            }
          }}
        />
      </Pie>
    </PieChart>
  );
};
