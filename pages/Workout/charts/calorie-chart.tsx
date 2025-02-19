"use client";

import { Flame } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
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
  { calories: 1200, total: 1500, fill: "hsl(var(--primary))" },
];

const chartConfig = {
  calories: {
    label: "Calories",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function CalorieChart() {
  const completionPercentage =
    (chartData[0].calories / chartData[0].total) * 100;
  const endAngle = (completionPercentage / 100) * 360;

  return (
    <Card className="flex flex-col transition-all hover:shadow-2xl shadow-md">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-xl">Calorie Count</CardTitle>
        <CardDescription className="text-xs">
          Today&apos;s Intake
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={120}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="calories" background cornerRadius={30} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
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
                          y={(viewBox.cy || 0) - 20}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].calories.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 10}
                          className="fill-muted-foreground text-sm"
                        >
                          of {chartData[0].total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 35}
                          className="fill-muted-foreground text-sm"
                        >
                          kcal
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {completionPercentage.toFixed(1)}% of daily calorie goal reached
          <Flame className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {chartData[0].total - chartData[0].calories} kcal remaining
        </div>
      </CardFooter>
    </Card>
  );
}
