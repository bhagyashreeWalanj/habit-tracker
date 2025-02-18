"use client";

import React from "react";

import { StepChart } from "./charts/chart-radial-shape";
import { CalorieChart } from "./charts/calorie-chart";
import { SleepChart } from "./charts/sleep-chart";
import { WeightChart } from "./charts/weight-chart";

const WorkoutStatistics = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 mx-3 ">
        <StepChart />
        <CalorieChart />
        <SleepChart />
        <WeightChart />
      </div>
    </>
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 mx-3 ">
    //   {stats.map((item) => {
    //     return (
    //       <Card
    //         key={item.id}
    //         className="flex items-center space-x-4 px-5 transition-all hover:shadow-2xl shadow-md"
    //       >
    //         <div className="space-y-1 p-6 flex flex-col items-center">
    //           <p className="text-2xl font-bold tracking-tight">
    //             {item.counter}
    //           </p>
    //           <p className="text-sm text-muted-foreground">{item.title}</p>
    //         </div>
    //         {item.title === "Steps Counter" ? (
    //           <CircularChartForCounts />
    //         ) : (
    //           // <RadialChartByShape counter={item.counter} labelText="Steps" />
    //           <Image
    //             src={item.icon}
    //             width={40}
    //             height={40}
    //             alt="test"
    //             className="text-primary"
    //           />
    //         )}

    //         {/* <Image
    //             src={item.icon}
    //             width={40}
    //             height={40}
    //             alt="test"
    //             className="text-primary"
    //           /> */}
    //       </Card>
    //     );
    //   })}
    // </div>
  );
};

export default WorkoutStatistics;
