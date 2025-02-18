"use client";
import { HabitType } from "@/types/GlobalTypes";
import React, { useEffect, useState, useCallback } from "react";
import type { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@/components/ui/checkbox";
// Dynamically import all icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDeleteLeft,
  faEdit,
  faTrashCan,
  faUser,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library
library.add(fas, far, fab);
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Circle, CircleCheck } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContextProvider } from "@/types/contextApi";
import DeleteHabit from "../SettingsWindow/DeleteHabit";
import { Button } from "@/components/ui/button";
import { ActionMenu } from "../SettingsWindow/ActionMenu";

const SingleHabitCard = ({
  singleHabit,
  isHabitCompleted,
}: {
  singleHabit: HabitType;
  isHabitCompleted: boolean;
}) => {
  const { selectedCurrentDateObject, allHabitsObject } =
    useGlobalContextProvider();
  const { selectedCurrentDate } = selectedCurrentDateObject;
  const { allHabits, setAllHabits } = allHabitsObject;

  const [checked, setChecked] = useState(
    singleHabit.completedDays.some((day) => day.date === selectedCurrentDate)
  );
  //
  const iconLookup: IconLookup = {
    prefix: singleHabit.icon.prefix,
    iconName: singleHabit.icon.iconName,
  };

  const handleCheckboxChecked = (checked: boolean) => {
    console.log("checked", checked);
    // const checkedNow = event.target.checked;
    setChecked(checked);
    if (checked === true) {
      checkHabit();
    } else {
      uncheckHabit();
    }
  };
  // Reorder habits based on checked state
  const sortedHabits = (updateAllHabits: any) => {
    return updateAllHabits.sort((a: any, b: any) => {
      if (
        a.completedDays.some((day: any) => day.date === selectedCurrentDate) &&
        !b.completedDays.some((day: any) => day.date === selectedCurrentDate)
      )
        return 1;
      if (
        !a.completedDays.some((day: any) => day.date === selectedCurrentDate) &&
        b.completedDays.some((day: any) => day.date === selectedCurrentDate)
      )
        return -1;
      return 0;
    });
  };

  const checkHabit = () => {
    const completedDays = {
      _id: uuidv4(),
      date: selectedCurrentDate,
    };
    const updatedHabit: HabitType = {
      ...singleHabit,
      completedDays: [...singleHabit.completedDays, completedDays],
    };

    const updateAllHabits: HabitType[] = allHabits.map((habit) => {
      if (habit._id === updatedHabit._id) {
        return updatedHabit;
      } else {
        return habit;
      }
    });

    const sortedHabitData = sortedHabits(updateAllHabits);
    setAllHabits(sortedHabitData);
  };

  const uncheckHabit = () => {
    if (singleHabit.completedDays.length > 0) {
      const updatedHabit: HabitType = {
        ...singleHabit,
        completedDays: singleHabit.completedDays.filter(
          (day) => day.date !== selectedCurrentDate
        ),
      };

      const updateAllHabits: HabitType[] = allHabits.map((habit) => {
        if (habit._id === updatedHabit._id) {
          return updatedHabit;
        } else {
          return habit;
        }
      });
      const sortedHabitData = sortedHabits(updateAllHabits);
      setAllHabits(sortedHabitData);
    }
  };

  useEffect(() => {
    const isCompleted = singleHabit.completedDays.some(
      (day) => day.date === selectedCurrentDate
    );

    setChecked(isCompleted);
  }, [singleHabit, selectedCurrentDate, allHabits]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        layout
        className={`${
          checked ? "opacity-50" : ""
        } flex items-center w-full bg-white dark:bg-darkBackground rounded-md mt-4`}
      >
        <Checkbox
          //defaultChecked
          checked={checked}
          onCheckedChange={handleCheckboxChecked}
          icon={
            <Circle
              width={30}
              height={30}
              className="text-lg text-primary dark:text-white"
            />
          }
          checkedIcon={
            <CircleCheck
              width={30}
              height={30}
              className="fill-green-500 text-white dark:text-darkBackground"
            />
          }
          className="mr-2"
        />

        <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 dark:bg-slate-800 ">
          <div className="w-full py-2">
            <div className="flex gap-2 justify-between">
              <div className="flex items-center gap-2 mb-4">
                {singleHabit.areas.map((area, index) => (
                  <div
                    key={index}
                    className="p-1 text-[12px] rounded-md px-2 bg-primary/5 text-white dark:bg-primary/20 dark:text-white"
                  >
                    <span className="text-primary">{`#${area.value}`}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                {singleHabit.frequency.days.map((day, index) => (
                  <div
                    key={index}
                    className="p-1 text-[12px] rounded-md px-2 bg-primary text-white font-medium dark:bg-primary/20 dark:text-white"
                  >
                    <span className="">{`${day}`}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={iconLookup}
                  width={20}
                  height={20}
                  className="p-2 rounded-full w-4 h-4 bg-primary/20 text-primary dark:text-white dark:bg-primary"
                />
                <span className={`${isHabitCompleted ? "line-through" : ""}`}>
                  {singleHabit.name}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-2 ml-10">
              <span className="text-primary">{`0 / 6 times`}</span>
            </div>
            {/* <div className="flex gap-2 mt-2 ml-10">
            {singleHabit.areas.map((area, index) => (
              <div
                key={index}
                className="p-1 text-[12px] rounded-md px-2 bg-primary/5 text-white dark:bg-primary/20 dark:text-white"
              >
                <span className="text-primary">{`#${area.value}`}</span>
              </div>
            ))}
          </div> */}
          </div>
          <div className="w-10 flex items-center justify-center">
            <ActionMenu />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleHabitCard;
