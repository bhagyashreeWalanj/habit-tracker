"use client";

import { useMemo, useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";

import {
  Bar,
  BarChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Habit {
  name: string;
  color: string;
  icon: string;
}
interface WeeklyBarChartProps {
  data: {
    date: Date;
    Completed: number;
  }[];
}
interface DayData {
  date: string;
  fullDate: string;
  totalCompleted: number;
  [key: string]: number | string; // This allows for dynamic habit properties
}
// Mock data for habits
const habits: Habit[] = [
  { name: "Exercise", color: "hsl(var(--chart-1))", icon: "" },
  { name: "Meditation", color: "hsl(var(--chart-2))", icon: "" },
  { name: "Reading", color: "hsl(var(--chart-3))", icon: "" },
  { name: "Coding", color: "hsl(var(--chart-4))", icon: "" },
];

const sampleData: WeeklyBarChartProps["data"] = [
  {
    date: new Date("2025-02-01"),
    Completed: 3,
  },
  {
    date: new Date("2025-02-02"),
    Completed: 4,
  },
  {
    date: new Date("2025-02-03"),
    Completed: 2,
  },
  {
    date: new Date("2025-02-04"),
    Completed: 5,
  },
  {
    date: new Date("2025-02-05"),
    Completed: 1,
  },
  {
    date: new Date("2025-02-06"),
    Completed: 4,
  },
  {
    date: new Date("2025-02-07"),
    Completed: 3,
  },
  {
    date: new Date("2025-02-08"),
    Completed: 2,
  },
  {
    date: new Date("2025-02-09"),
    Completed: 5,
  },
  {
    date: new Date("2025-02-10"),
    Completed: 1,
  },
  {
    date: new Date("2025-02-11"),
    Completed: 4,
  },
  {
    date: new Date("2025-02-12"),
    Completed: 3,
  },
  {
    date: new Date("2025-02-13"),
    Completed: 2,
  },
  {
    date: new Date("2025-02-14"),
    Completed: 5,
  },
];

// Function to generate mock data for a week
// const generateWeekData = (startDate: Date): DayData[] => {
//   return Array.from({ length: 7 }, (_, i) => {
//     const date = addDays(startDate, i);
//     const dayData: DayData = {
//       date: format(date, "EEE"),
//       fullDate: format(date, "yyyy-MM-dd"),
//     };
//     habits.forEach((habit) => {
//       dayData[habit.name] = Math.floor(Math.random() * 100);
//     });
//     console.log("dayData", dayData);
//     return dayData;
//   });
// };

const generateWeekData = (startDate: Date): DayData[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    const dayData: DayData = {
      date: format(date, "EEE"),
      fullDate: format(date, "yyyy-MM-dd"),
      totalCompleted: 0,
    };
    habits.forEach((habit) => {
      const completed = Math.random() < 0.7 ? 1 : 0; // 70% chance of completing a habit
      dayData[habit.name] = completed;
      dayData.totalCompleted += completed;
    });
    return dayData;
  });
};

export default function WeeklyActivityCharts() {
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date()));
  const [weekData, setWeekData] = useState(generateWeekData(weekStart));

  const navigateWeek = (direction: "prev" | "next") => {
    const newWeekStart =
      direction === "prev" ? addDays(weekStart, -7) : addDays(weekStart, 7);
    setWeekStart(newWeekStart);
    setWeekData(generateWeekData(newWeekStart));
  };

  const filteredData = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, i) => {
      return addDays(weekStart, i);
    });

    return days.map((day) => {
      const matchingData = sampleData.find(
        (d) => format(d.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
      );
      return {
        day: format(day, "MMM dd"),
        Completed: matchingData?.Completed || 0,
      };
    });
  }, [weekStart]);

  // const overallProgress = Math.round(
  //   weekData.reduce(
  //     (acc, day) =>
  //       acc +
  //       habits.reduce(
  //         (habitAcc, habit) => habitAcc + (day[habit.name] as number),
  //         0
  //       ) /
  //         habits.length,
  //     0
  //   ) / 7
  // );
  const overallProgress = Math.round(
    (weekData.reduce((acc, day) => acc + day.totalCompleted, 0) /
      (7 * habits.length)) *
      100
  );

  return (
    <Card className="p-2 animate-fade-in">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <CardTitle>Weekly Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateWeek("prev")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                {format(weekStart, "MMM d")} -{" "}
                {format(addDays(weekStart, 6), "MMM d, yyyy")}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigateWeek("next")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="flex flex-col lg:flex-row ">
            <div className="w-full ">
              <div className="w-full h-[300px]">
                <ChartContainer
                  className="h-[300px] w-full"
                  config={habits.reduce(
                    (acc, habit) => ({ ...acc, [habit.name]: habit }),
                    {}
                  )}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={filteredData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="day" />
                      <YAxis />

                      <Bar
                        dataKey="Completed"
                        radius={[4, 4, 0, 0]}
                        className="fill-primary"
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent hideLabel />}
                        cursor={false}
                        defaultIndex={1}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              {/* <ChartContainer
                className="h-[400px] w-full"
                config={habits.reduce(
                  (acc, habit) => ({ ...acc, [habit.name]: habit }),
                  {}
                )}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={weekData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="date" />
                    <YAxis />
                    
                    {habits.map((habit, index) => (
                      <Bar
                        key={habit.name}
                        dataKey={habit.name}
                        stackId="a"
                        fill={habit.color}
                        radius={[
                          index === 0 ? 4 : 0,
                          index === habits.length - 1 ? 4 : 0,
                          index === habits.length - 1 ? 4 : 0,
                          index === 0 ? 4 : 0,
                        ]}
                      />
                    ))}
                    <ChartTooltip
                      content={<ChartTooltipContent hideLabel />}
                      cursor={false}
                      defaultIndex={1}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer> */}
            </div>
            <div className="w-full lg:w-1/4 mt-4 lg:mt-0 flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="80%"
                    outerRadius="100%"
                    data={[{ name: "Progress", value: overallProgress }]}
                    startAngle={0}
                    endAngle={360}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      //clockWise
                      dataKey="value"
                      cornerRadius={10}
                      fill="hsl(var(--primary))"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-primary text-2xl font-bold"
                    >
                      {`${overallProgress}%`}
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
