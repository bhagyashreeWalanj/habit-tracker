import React from "react";
import { Circle, CircleCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/types/contextApi";
import SingleHabitCard from "./HabitContainer/SingleHabitCard";

const HabitsCompleted = () => {
  const { allFilteredHabitsObject, selectedCurrentDateObject } =
    useGlobalContextProvider();
  const { allFilteredHabits } = allFilteredHabitsObject;
  const { selectedCurrentDate } = selectedCurrentDateObject;

  const areAllHabitsCompleted = allFilteredHabits.every((singleHabit) => {
    return !singleHabit.completedDays.some(
      (day) => day.date === selectedCurrentDate
    );
  });
  return (
    <div className="bg-white dark:bg-darkBackground mt-7 p-8 rounded-md dark:border-white/[0.2] border-black/[0.1] border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:text-white">
      <span className="font-bold text-lg mb-2"> Completed Habits</span>
      <div className="mt-0 w-full flex justify-center">
        {areAllHabitsCompleted && (
          <p className="text-lg text-gray-400 w-72 text-center">
            {"Habit stacking is like a superpower! Don't let it go to waste!"}
          </p>
        )}
      </div>
      <div className="">
        {allFilteredHabits.map((singleHabit, index) => (
          <div
            className="flex p-3 w-full items-center justify-between"
            key={`${singleHabit._id}_${singleHabit.name}`}
          >
            {singleHabit.completedDays.some(
              (day) => day.date === selectedCurrentDate
            ) === true && (
              <div className="flex items-center w-full bg-white dark:bg-darkBackground rounded-md mt-4 opacity-50">
                <SingleHabitCard
                  singleHabit={singleHabit}
                  isHabitCompleted={true}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitsCompleted;

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between ">
      <Checkbox
        defaultChecked
        icon={
          <Circle width={30} height={30} className="text-lg text-primary" />
        }
        checkedIcon={
          <CircleCheck
            width={30}
            height={30}
            className=" fill-primary text-white dark:text-darkBackground text-primary-foreground"
          />
        }
        className="mr-2"
      />
      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50  dark:bg-slate-800  ">
        <div className=" w-full">
          {/* div for icon and name of the habit */}
          <div className="flex gap-2 justify-between  ">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCode}
                width={20}
                height={20}
                className="p-2 rounded-full w-4 h-4 bg-primary text-white"
              />
              <span className="">Coding</span>
            </div>
          </div>
          {/* div for the areas */}
          <div className="flex gap-2 mt-2 ">
            <div className="p-1 text-white text-[12px] rounded-md px-2  bg-primary/5">
              <span className="text-primary">Areal</span>
            </div>
            <div className="p-1 text-white text-[12px] rounded-md px-2 bg-primary/5">
              <span className="text-primary">Spiritual</span>
            </div>
          </div>
        </div>
        {/* div for the three dot button */}
        <div className="w-10 flex items-center justify-center">
          <FontAwesomeIcon
            width={20}
            height={20}
            icon={faEllipsisVertical}
            className="text-primary dark:text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
