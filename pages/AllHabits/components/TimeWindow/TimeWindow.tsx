"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

type TimeWindowProps = {
  setTimeSelected: (time: string) => void;
  // control: Control<any>;
  // name: string;
};

export default function TimeWindow({
  setTimeSelected,
}: // control,
// name,
TimeWindowProps) {
  const [open, setOpen] = React.useState(false);
  //const { field } = useController({ name, control });

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const [hour, setHour] = useState("08");
  const [minute, setMinute] = useState("00");
  const [timeZone, setTimeZone] = useState("AM");

  const handleTimeZone = (value: string) => {
    setTimeZone(value);
  };

  const handleSaveButton = () => {
    const selectedTime = `${hour}:${minute} ${timeZone}`;
    setTimeSelected(selectedTime);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-between text-primary dark:text-white items-center p-4 m-2 mt-8 rounded-md bg-primary/30">
          <span>Select Time</span>
          <div className="flex gap-2 items-center justify-center cursor-pointer select-none">
            <span>
              {hour}:{minute} {timeZone}
            </span>
            <FontAwesomeIcon icon={faChevronDown} width={12} height={12} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-w-full">
        <DialogHeader>
          <DialogTitle>Choose Your Time</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className=" space-y-4">
          <div className="flex items-center justify-center gap-2 text-3xl ">
            <div className="flex gap-2 justify-center items-center">
              <Select onValueChange={setHour} defaultValue={hour}>
                <SelectTrigger className="w-[100px] text-4xl h-[105px]  p-4 rounded-md text-center text-primary bg-gray-100 dark:bg-primary/30 dark:text-white outline-none focus:bg-primary/15">
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent className="bg-gray-100 dark:bg-primary/35 ">
                  {hours.map((hour) => (
                    <SelectItem
                      key={hour}
                      value={hour}
                      className="text-xl text-primary dark:text-white "
                    >
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="text-2xl font-bold">:</span>
              <Select onValueChange={setMinute} defaultValue={minute}>
                <SelectTrigger className="w-[100px] text-4xl h-[105px]  p-4 rounded-md text-center text-primary bg-gray-100  dark:bg-primary/30 dark:text-white outline-none focus:bg-primary/15">
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent className="bg-gray-100 dark:bg-primary/35 ">
                  {minutes.map((minute) => (
                    <SelectItem
                      key={minute}
                      value={minute}
                      className="text-xl text-primary  dark:text-white "
                    >
                      {minute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className={`text-xl flex justify-center items-center w-[108px] h-[45px] rounded-md   focus:bg-primary/15 ${
                  timeZone === "AM"
                    ? "bg-primary dark:bg-primary dark:text-white"
                    : "bg-gray-100 dark:bg-primary/15 text-primary dark:text-white"
                }`}
                onClick={() => handleTimeZone("AM")}
              >
                AM
              </button>
              <button
                className={`text-xl flex justify-center items-center w-[108px] h-[45px] rounded-md  focus:bg-primary/15 ${
                  timeZone === "PM"
                    ? "bg-primary dark:bg-primary dark:text-white"
                    : "bg-gray-100 dark:bg-primary/15 text-primary dark:text-white"
                }`}
                onClick={() => handleTimeZone("PM")}
              >
                PM
              </button>
            </div>
          </div>
          <Button
            className="bg-primary dark:bg-primary p-3 text-white w-full rounded-md mt-10 mb-1"
            onClick={handleSaveButton}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
