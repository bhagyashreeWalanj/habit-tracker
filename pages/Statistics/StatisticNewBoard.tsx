"use client";
import { Card } from "@/components/ui/card";
// Dynamically import all icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library
library.add(fas, far, fab);
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContextProvider } from "@/types/contextApi";
import { calculateStreak, getCurrentDayName } from "@/utils/DateFunctions";

type statisticCard = {
  id: number;
  icon: string;
  counter: number;
  title: string;
};
const statisticData = [
  {
    id: 1,
    icon: "/assets/icons/check.svg",
    counter: 5,
    title: "Total Habits",
  },
  {
    id: 2,
    icon: "/assets/icons/calendar-alt.svg",
    counter: 5,
    title: "Total Perfect Days",
  },
  {
    id: 3,
    icon: "/assets/icons/chart.png",
    counter: 5,
    title: " Average Per Daily",
  },
  {
    id: 4,
    icon: "/assets/icons/fire.png",
    counter: 5,
    title: "Best Streak",
  },
];

const StatisticNewBoard = () => {
  const {
    allHabitsObject: { allHabits },
  } = useGlobalContextProvider();
  const [stats, setStats] = useState<statisticCard[]>(statisticData);

  useEffect(() => {
    const dateCounts: { [key: string]: number } = {};

    allHabits.forEach((habit) => {
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

      const numberOfHabitsEachDays = allHabits.filter((singleHabit) => {
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
    let totalCompletedHabits = 0;
    Object.values(dateCounts).forEach((habitCount) => {
      totalCompletedHabits += habitCount;
    });

    const averagePerDaily = (totalCompletedHabits / uniqueDates.length).toFixed(
      2
    );

    const streaks = allHabits.map((habit) => calculateStreak(habit));
    const totalStreak = streaks.reduce((a, b) => a + b, 0);

    const copyStats = [...statisticData];
    copyStats[0].counter = allHabits.length;
    copyStats[1].counter = perfectDaysCount;
    copyStats[2].counter = parseFloat(averagePerDaily);
    copyStats[3].counter = totalStreak;
    setStats(copyStats);
  }, [allHabits]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 ">
      {stats.map((item) => {
        return (
          <Card
            key={item.id}
            className="p-6 flex items-center space-x-4 transition-all hover:shadow-2xl shadow-md bg-white dark:bg-darkBackground"
          >
            <div className="p-3 rounded-full bg-slate-50 dark:bg-primary border">
              <Image
                src={item.icon}
                width={40}
                height={40}
                alt="test"
                className="text-primary dark:text-primary "
              />
            </div>
            <div className="space-y-1">
              <p className="text-xl font-bold tracking-tight">{item.counter}</p>
              <p className="text-sm text-muted-foreground">{item.title}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatisticNewBoard;
