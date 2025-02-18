import React from "react";
import HabitContainerTop from "./HabitContainer/HabitContainerTop";
import HabitContainerMiddle from "./HabitContainer/HabitContainerMiddle";

const HabitContainer = () => {
  return (
    <div className="mt-5 bg-white dark:bg-darkBackground dark:border-white/[0.2] border-black/[0.1] border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:text-white flex flex-col gap-3 rounded-md p-5">
      <HabitContainerTop />
      <HabitContainerMiddle />
    </div>
  );
};

export default HabitContainer;
