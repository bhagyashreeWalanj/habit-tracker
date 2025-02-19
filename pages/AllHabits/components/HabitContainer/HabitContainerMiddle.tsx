"use client";
import React, { useEffect } from "react";
import HabitCard from "./HabitCard";
import { useGlobalContextProvider } from "@/types/contextApi";
import { HabitType } from "@/types/GlobalTypes";
import { getCurrentDayName } from "@/utils/DateFunctions";
import HabitsEmptyPlaceHolder from "@/app/emptyPlaceholder/HabitsEmptyPlaceHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

const HabitContainerMiddle = () => {
  const {
    allHabitsObject,
    selectedAreaTabObject,
    selectedCurrentDateObject,
    allFilteredHabitsObject,
  } = useGlobalContextProvider();
  const { allHabits } = allHabitsObject;
  const { allFilteredHabits, setAllFilteredHabits } = allFilteredHabitsObject;

  const { selectedAreaTab } = selectedAreaTabObject;
  const { selectedCurrentDate } = selectedCurrentDateObject;

  useEffect(() => {
    let filteredHabitsByArea: HabitType[] = [];
    const getTwoFirstDayLetter = getCurrentDayName(selectedCurrentDate).slice(
      0,
      2
    );
    const filteredHabitsByFrequency = allHabits.filter((singleHabit) => {
      return singleHabit.frequency.days.some(
        (day) => day === getTwoFirstDayLetter
      );
    });

    if (selectedAreaTab !== "All") {
      const filteredDataByArea = (data: HabitType[], area: string) => {
        return data.filter((habit) =>
          habit.areas.some((areaItem) => areaItem.value === area)
        );
      };
      const filteredData = filteredDataByArea(
        filteredHabitsByFrequency,
        selectedAreaTab
      );
      console.log("filteredData", filteredData);
      filteredHabitsByArea = filteredData;
    } else {
      filteredHabitsByArea = filteredHabitsByFrequency;
    }

    setAllFilteredHabits(filteredHabitsByArea);
  }, [selectedCurrentDate, allHabits, selectedAreaTab]);

  // check if all habits  for the selected date are completed
  const isAllHabitsCompleted =
    allFilteredHabits.length > 0 &&
    allFilteredHabits.every((habit) => {
      return habit.completedDays.some(
        (day) => day.date === selectedCurrentDate
      );
    });

  return (
    <div className="p-3">
      {allFilteredHabits.length === 0 ? (
        <HabitsEmptyPlaceHolder />
      ) : (
        <>
          {isAllHabitsCompleted && (
            <div className="flex justify-center items-center p-5 flex-col">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="text-4xl text-gray-400"
              />
              <span className="text-[16px] text-gray-400 w-64 text-center mt-6">
                {"Great Job !!! You've completed all your habits for this day!"}
              </span>
            </div>
          )}
          <AnimatePresence>
            <div className="bg-white dark:bg-darkBackground rounded-md">
              {<HabitCard allHabits={allFilteredHabits} />}
            </div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default HabitContainerMiddle;
