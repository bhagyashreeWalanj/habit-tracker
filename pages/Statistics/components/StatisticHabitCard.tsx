import { HabitType } from "@/types/GlobalTypes";
import { faArrowCircleDown, faBook } from "@fortawesome/free-solid-svg-icons";
import type { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { calculateStreak } from "@/utils/DateFunctions";
import HeatMapBySingleHabit from "../charts/HeatMapBySingleHabit";

const StatisticHabitCard = ({ habit }: { habit: HabitType }) => {
  const recurringDaysText = habit.frequency.days.join(",");
  const iconLookup: IconLookup = {
    prefix: habit.icon.prefix,
    iconName: habit.icon.iconName,
  };

  function calculateConsistency(habit: HabitType): number {
    return (calculateStreak(habit) / habit.completedDays.length) * 100;
  }

  return (
    <div className="bg-slate-50 dark:bg-black text-black dark:text-white p-5 rounded-md m-3 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* icon */}
          <div className="bg-primary w-10 h-10 rounded-full p-3 flex items-center justify-center text-white  ">
            <FontAwesomeIcon icon={iconLookup} />
          </div>
          {/* Habit Name */}
          <span>{habit.name}</span>
          {/* notification */}
          <span className="bg-primary/5 dark:bg-primary/40 text-primary p-1 text-sm px-3 rounded-md">
            {"11:30PM"}
          </span>
        </div>
        {/* frequency */}
        <div>
          <span className="text-gray-400">{recurringDaysText}</span>
        </div>
      </div>
      {/* single card stats */}
      <div className="mt-5 p-2 grid grid-cols-3">
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="font-bold">{habit.completedDays.length}</span>
          <span>Total</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="font-bold">{`${calculateConsistency(habit).toFixed(
            0
          )}%`}</span>
          <span>Perfect days</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="font-bold">{calculateStreak(habit)}</span>
          <span>Streaks</span>
        </div>
      </div>

      {/* Heatmap */}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger></AccordionTrigger>
          <AccordionContent className=" flex items-center justify-center">
            <div className="w-[900px]  items-center justify-center">
              <HeatMapBySingleHabit habit={habit} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StatisticHabitCard;
