"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import NewHabitForm from "./NewHabitForm";

export default function CreateNewHabit() {
  const [open, setOpen] = useState(false);
  const setCloseModalAfterSubmit = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 items-center bg-primary p-3 text-white rounded-md text-sm font-bold">
          <FontAwesomeIcon icon={faPlus} />
          <span>New Habit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem] ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold ">
            Add New Habit
          </DialogTitle>
          <DialogDescription>To create 1% progress everyday</DialogDescription>
        </DialogHeader>
        <NewHabitForm setCloseModalAfterSubmit={setCloseModalAfterSubmit} />
      </DialogContent>
    </Dialog>
  );
}
