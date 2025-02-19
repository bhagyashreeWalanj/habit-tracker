"use client";

import { useState } from "react";
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

interface DayData {
  date: string;
  fullDate: string;
  [key: string]: number | string; // This allows for dynamic habit properties
}
// Mock data for habits
const habits: Habit[] = [
  { name: "Exercise", color: "hsl(var(--chart-1))", icon: "" },
  { name: "Meditation", color: "hsl(var(--chart-2))", icon: "" },
  { name: "Reading", color: "hsl(var(--chart-3))", icon: "" },
  { name: "Coding", color: "hsl(var(--chart-4))", icon: "" },
];

// Function to generate mock data for a week
const generateWeekData = (startDate: Date): DayData[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    const dayData: DayData = {
      date: format(date, "EEE"),
      fullDate: format(date, "yyyy-MM-dd"),
    };
    habits.forEach((habit) => {
      dayData[habit.name] = Math.floor(Math.random() * 100);
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

  const overallProgress = Math.round(
    weekData.reduce(
      (acc, day) =>
        acc +
        habits.reduce(
          (habitAcc, habit) => habitAcc + (day[habit.name] as number),
          0
        ) /
          habits.length,
      0
    ) / 7
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
              <ChartContainer
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
              </ChartContainer>
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
