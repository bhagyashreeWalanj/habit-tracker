"use client";
import React from "react";
import { HabitType } from "@/types/GlobalTypes";
import { useGlobalContextProvider } from "@/types/contextApi";
import SingleHabitCard from "./SingleHabitCard";

const HabitCard = ({ allHabits }: { allHabits: HabitType[] }) => {
  const { selectedCurrentDateObject } = useGlobalContextProvider();
  const { selectedCurrentDate } = selectedCurrentDateObject;

  return (
    <>
      {allHabits.map((habit: HabitType) => {
        return (
          <div
            className="flex p-3 items-center justify-between"
            key={`${habit._id}_${habit.name}`}
          >
            {habit.completedDays.some(
              (day) => day.date === selectedCurrentDate
            ) === true && (
              <SingleHabitCard singleHabit={habit} isHabitCompleted={true} />
            )}

            {habit.completedDays.some(
              (day) => day.date === selectedCurrentDate
            ) === false && (
              <SingleHabitCard singleHabit={habit} isHabitCompleted={false} />
            )}
          </div>
        );
      })}
    </>
  );
};
export default HabitCard;
