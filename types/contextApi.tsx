"use client";

import React, { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { GlobalContextType } from "./GlobalContextType";
import { menuItemType } from "./MenuItemType";
import {
  faRectangleList,
  faChartSimple,
  faLayerGroup,
  faMoon,
  faSun,
  faDumbbell,
  faUser,
  faGraduationCap,
  faBriefcaseMedical,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { DarkModeItem } from "./DarkModeTypes";
import { AreaType, HabitType } from "./GlobalTypes";
import { getDateString } from "@/utils/DateFunctions";
import { sampleHabitData } from "@/constants/sampleHabitData";

const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  darkModeObject: {
    isDarkMode: false,
    setDarkMode: () => {},
    darkModeItems: [],
    setDarkModeItems: () => {},
  },
  allHabitsObject: {
    allHabits: [],
    setAllHabits: () => {},
  },
  allFilteredHabitsObject: {
    allFilteredHabits: [],
    setAllFilteredHabits: () => {},
  },
  allAreasObject: {
    allAreas: [],
    setAllAreas: () => {},
  },
  selectedAreaTabObject: {
    selectedAreaTab: "",
    setSelectedAreaTab: () => {},
  },
  selectedCurrentDateObject: {
    selectedCurrentDate: "",
    setSelectedCurrentDate: () => {},
  },
  offsetDayObject: {
    offsetDay: 0,
    setOffsetDay: () => {},
  },
});

function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { id: 22, name: "All Habits", isSelected: true, icon: faRectangleList },
    { id: 23, name: "Workout", isSelected: false, icon: faDumbbell },
    { id: 24, name: "Statistics", isSelected: false, icon: faChartSimple },
    { id: 25, name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItem[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);

  const [allAreas, setAllAreas] = useState<AreaType[]>([
    { value: "All", label: "All", icon: faUser },
    { value: "Study", label: "Study", icon: faGraduationCap },
    { value: "Health", label: "Health", icon: faBriefcaseMedical },
    { value: "Spiritual", label: "Spiritual", icon: faHeart },
  ]);
  const [selectedAreaTab, setSelectedAreaTab] = useState<string>("All");

  const [allHabits, setAllHabits] = useState<HabitType[]>([]);
  const [allFilteredHabits, setAllFilteredHabits] = useState<HabitType[]>([]);

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(() =>
    getDateString(new Date())
  );
  const [offsetDay, setOffsetDay] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let allHabitData: HabitType[] = sampleHabitData;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAllHabits(allHabitData);
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        darkModeObject: {
          isDarkMode,
          setDarkMode,
          darkModeItems,
          setDarkModeItems,
        },
        allHabitsObject: {
          allHabits,
          setAllHabits,
        },
        allFilteredHabitsObject: {
          allFilteredHabits,
          setAllFilteredHabits,
        },
        selectedCurrentDateObject: {
          selectedCurrentDate,
          setSelectedCurrentDate,
        },
        offsetDayObject: { offsetDay, setOffsetDay },
        allAreasObject: { allAreas, setAllAreas },
        selectedAreaTabObject: { selectedAreaTab, setSelectedAreaTab },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
