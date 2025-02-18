import { HabitType } from "@/types/GlobalTypes";
import { Dispatch, SetStateAction } from "react";

const addNewHabit = ({
  allHabits,
  setAllHabits,
  newHabit,
}: {
  allHabits: HabitType[];
  setAllHabits: Dispatch<SetStateAction<HabitType[]>>;
  newHabit: HabitType;
}) => {
  setAllHabits([...allHabits, newHabit]);
};

export default addNewHabit;
