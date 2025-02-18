"use client";
import React, { useState, useEffect } from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const samplechartData = [
  { browser: "safari", visitors: "1260", fill: "var(--color-safari)" },
];

export default function RadialChartByShape({
  counter,
  labelText,
}: {
  counter: string;
  labelText: string;
}) {
  const [chartData, setchartData] = useState(samplechartData);
  const chartConfig = {
    steps: {
      label: "Steps",
      color: "#c20c1c",
    },
    weight: {
      label: "Weight",
      color: "#c20c1c",
    },
    sleep: {
      label: "Sleep",
      color: "#c20c1c",
    },
    calories: {
      label: "Calories",
      color: "#c20c1c",
    },
  };

  useEffect(() => {
    const calculateChartData = [
      { browser: labelText, visitors: counter, fill: "var(--color-safari)" },
    ];

    setchartData(calculateChartData);
  }, []);
  return (
    <>
      <div>
        <div className=" flex flex-col items-center animate-scale-in border-none w-40 h-40 m-4">
          <div style={{ width: 150, height: 150 }}>
            <ChartContainer config={chartConfig} className="w-[100%] h-[100%]">
              <RadialBarChart
                data={chartData}
                endAngle={100}
                innerRadius={60}
                outerRadius={100}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background "
                  polarRadius={[65, 56]}
                />
                <RadialBar
                  dataKey="visitors"
                  background
                  className="w-40 h-40"
                />
                <PolarRadiusAxis
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  className="w-40 h-40"
                >
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
                              y={viewBox.cy}
                              className="fill-black text-2xl font-bold"
                            >
                              {counter}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 18}
                              className="fill-muted-foreground"
                            >
                              {labelText}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </>
  );
}
