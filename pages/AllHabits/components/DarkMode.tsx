"use client";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalContextProvider } from "@/types/contextApi";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const DarkMode = () => {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode, setDarkMode, darkModeItems, setDarkModeItems } =
    darkModeObject;
  const { theme, setTheme } = useTheme();

  const handleClickedMode = (singleItemIndex: number) => {
    const updatedDarkModeItems = darkModeItems.map(
      (darkModeItem: any, index: number) => {
        if (singleItemIndex === index) {
          return { ...darkModeItem, isSelected: true };
        } else {
          return { ...darkModeItem, isSelected: false };
        }
      }
    );
    setDarkModeItems(updatedDarkModeItems);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => {
    darkModeItems.forEach((singleItem) => {
      if (singleItem.id === 1 && singleItem.isSelected) {
        setDarkMode(false);
        setTheme("light");
      }
      if (singleItem.id === 2 && singleItem.isSelected) {
        setDarkMode(true);
        setTheme("dark");
      }
    });
  }, [darkModeItems, setDarkMode]);

  return (
    <div className="border-none">
      <Button
        variant={"secondary"}
        className="border-none   rounded-3xl"
        size={"icon"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <FontAwesomeIcon
          icon={faMoon}
          width={20}
          height={20}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
        />
        <FontAwesomeIcon
          icon={faSun}
          width={20}
          height={20}
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>

    // <div className="bg-slate-50 w-[90px] relative rounded-3xl flex h-full">
    //   {darkModeItems.map((singleItem, singleItemIndex) => (
    //     <div
    //       key={singleItemIndex}
    //       className="h-full w-[45px] z-40 flex justify-center items-center"
    //       //onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    //       onClick={() => handleClickedMode(singleItemIndex)}
    //     >
    //       <FontAwesomeIcon
    //         icon={singleItem.icon}
    //         className={`${
    //           singleItem.isSelected
    //             ? "text-primary dark:text-white"
    //             : "text-primary"
    //         } cursor-pointer items-center`}
    //         width={20}
    //         height={20}
    //       />
    //     </div>
    //   ))}

    //   <div
    //     className={` w-[38px] absolute h-[38px] top-1 transform ${
    //       isDarkMode
    //         ? "translate-x-[48px] bg-white dark:bg-gray-800"
    //         : "translate-x-1 bg-white"
    //     } transition-all rounded-full `}
    //   ></div>
    // </div>
  );
};

export default DarkMode;
