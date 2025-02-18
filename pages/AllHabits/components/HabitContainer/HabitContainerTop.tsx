import { CircleArrowLeft, CircleArrowRight, PlusIcon } from "lucide-react";
import React, { useEffect } from "react";
import CreateNewHabit from "./CreateNewHabit";
import {
  getCurrentDayName,
  getDateString,
  getFormattedDate,
} from "@/utils/DateFunctions";
import GlobalContextProvider, {
  useGlobalContextProvider,
} from "@/types/contextApi";

type Option = "next" | "prev";
const HabitContainerTop = () => {
  const { offsetDayObject, selectedCurrentDateObject } =
    useGlobalContextProvider();
  const { selectedCurrentDate, setSelectedCurrentDate } =
    selectedCurrentDateObject;
  const { offsetDay, setOffsetDay } = offsetDayObject;

  const updateDate = (option: Option) => {
    if (option === "next") setOffsetDay((prev) => prev + 1);
    if (option === "prev") setOffsetDay((prev) => prev - 1);
  };
  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + offsetDay);
    setSelectedCurrentDate(getDateString(date));
  }, [offsetDay, setSelectedCurrentDate]);

  return (
    <div className="p-3 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div>
          <h2 className="font-bold text-lg">
            {getCurrentDayName(selectedCurrentDate)}
          </h2>
          <span className="font-light text-[12px]">
            {getFormattedDate(selectedCurrentDate)}
          </span>
        </div>

        <div className="flex gap-1 ml-4">
          <div
            className="text-primary cursor-pointer"
            onClick={() => updateDate("prev")}
          >
            <CircleArrowLeft />
          </div>
          <div
            className="text-primary cursor-pointer"
            onClick={() => updateDate("next")}
          >
            <CircleArrowRight />
          </div>
        </div>
      </div>

      <CreateNewHabit />
    </div>
  );
};

export default HabitContainerTop;
