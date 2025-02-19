"use client";

import { Scale } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { date: "Jan", weight: 67.5 },
  { date: "Feb", weight: 66.2 },
  { date: "Mar", weight: 65.0 },
  { date: "Apr", weight: 63.8 },
  { date: "May", weight: 62.9 },
  { date: "Jun", weight: 62.2 },
];

const chartConfig = {
  weight: {
    label: "Weight",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function WeightChart() {
  const currentWeight = chartData[chartData.length - 1].weight;
  const goalWeight = 57.2;
  const weightToLose = (currentWeight - goalWeight).toFixed(1);

  return (
    <Card className="flex flex-col transition-all hover:shadow-2xl shadow-md">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-xl">Weight Loss Tracker</CardTitle>
        <CardDescription className="text-xs">6-Month Progress</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Current Weight: {currentWeight} kg
          <Scale className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {weightToLose} kg to reach your goal weight of {goalWeight} kg
        </div>
      </CardFooter>
    </Card>
  );
}
