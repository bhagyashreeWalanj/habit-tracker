"use client";
import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import { useTheme } from "next-themes";
import { useGlobalContextProvider } from "@/types/contextApi";

const MainCalendar = () => {
  const { theme, setTheme } = useTheme();
  const { selectedCurrentDateObject, offsetDayObject } =
    useGlobalContextProvider();
  const { selectedCurrentDate, setSelectedCurrentDate } =
    selectedCurrentDateObject;
  const { setOffsetDay } = offsetDayObject;

  const value: Dayjs | null = selectedCurrentDate
    ? dayjs(selectedCurrentDate)
    : null;

  // const [value, setValue] = React.useState<Dayjs | null>(
  //   dayjs(selectedCurrentDate)
  // );

  const handleOnChangeDate = (newDate: Dayjs) => {
    // convert ferom the Day.js object to js date object
    const jsdate = newDate.toDate();
    const currentDate = new Date();

    //calculate difference in miliseconds
    const differenceInMs = jsdate.getTime() - currentDate.getTime();

    // calculate the difference in days
    const differenceInDays = differenceInMs / (1000 * 3600 * 24);

    setOffsetDay(Math.floor(differenceInDays + 1));
  };

  return (
    <div className="flex mx-4  flex-col gap-6 justify-center items-center mt-10 bg-slate-50 dark:bg-slate-800 dark:text-white text-black rounded-xl p-10 pt-7">
      <span className="font-bold text-xl cursor-pointer hover:text-primary">
        Calendar{" "}
      </span>
      <DateCalendar
        className="text-lg"
        // showDaysOutsideCurrentMonth
        value={value}
        onChange={(newValue) => handleOnChangeDate(newValue)}
        views={["year", "month", "day"]}
        sx={{
          "& .MuiButtonBase-root.MuiPickersDay-root": {
            color: theme === "dark" ? "#fff" : "#000",
            "&.Mui-selected": {
              backgroundColor:
                theme === "dark"
                  ? "hsl(var(--primary))"
                  : "hsl(var(--primary))",
              color: "#fff",
            },
          },
          "& .MuiDayCalendar-weekDayLabel": {
            color: theme === "dark" ? "#fff" : "#000",
          },
          "& .MuiPickersYear-yearButton.Mui-selected": {
            backgroundColor:
              theme === "dark"
                ? "hsl(var(--darkBackground))"
                : "hsl(var(--primary))",
            color: "#fff",
          },
          "& .MuiPickersMonth-monthButton.Mui-selected": {
            backgroundColor:
              theme === "dark"
                ? "hsl(var(--darkBackground))"
                : "hsl(var(--primary))", //"#dc143c",
            color: "#fff",
          },
          "& .MuiButtonBase-root": {
            fontSize: "14px",
          },
        }}
      />
    </div>
  );
};

export default MainCalendar;
