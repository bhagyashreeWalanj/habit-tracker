"use client";
import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGlobalContextProvider } from "@/types/contextApi";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { DarkModeItem } from "@/types/DarkModeTypes";

const DarkMode = () => {
  const { darkModeObject } = useGlobalContextProvider();
  const { setDarkMode, darkModeItems } = darkModeObject;
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    darkModeItems.forEach((singleItem: DarkModeItem) => {
      if (singleItem.id === 1 && singleItem.isSelected) {
        setDarkMode(false);
      }
      if (singleItem.id === 2 && singleItem.isSelected) {
        setDarkMode(true);
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
  );
};

export default DarkMode;
