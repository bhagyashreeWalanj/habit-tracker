import { menuItemType } from "./MenuItemType";
import { Dispatch, SetStateAction } from "react";
import { DarkModeItem } from "./DarkModeTypes";
import { AreaType, HabitType } from "./GlobalTypes";

export type GlobalContextType = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  };

  darkModeObject: {
    isDarkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    darkModeItems: DarkModeItem[];
    setDarkModeItems: Dispatch<SetStateAction<DarkModeItem[]>>;
  };
  allHabitsObject: {
    allHabits: HabitType[];
    setAllHabits: Dispatch<SetStateAction<HabitType[]>>;
  };
  allFilteredHabitsObject: {
    allFilteredHabits: HabitType[];
    setAllFilteredHabits: Dispatch<SetStateAction<HabitType[]>>;
  };
  // It saves all habits
  allAreasObject: {
    allAreas: AreaType[];
    setAllAreas: Dispatch<SetStateAction<AreaType[]>>;
  };
  // It saves selected tab value from areaContainer
  selectedAreaTabObject: {
    selectedAreaTab: string;
    setSelectedAreaTab: Dispatch<SetStateAction<string>>;
  };
  // It saves current selected date
  selectedCurrentDateObject: {
    selectedCurrentDate: string;
    setSelectedCurrentDate: Dispatch<SetStateAction<string>>;
  };
  offsetDayObject: {
    offsetDay: number;
    setOffsetDay: Dispatch<SetStateAction<number>>;
  };
};
