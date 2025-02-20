"use client";

import React, { useState, useEffect } from "react";
import { useGlobalContextProvider } from "@/types/contextApi";
import { menuItemType } from "@/types/MenuItemType";
import AllHabits from "@/pages/AllHabits/AllHabits";
import Statistics from "@/pages/Statistics/Statistics";
import Areas from "@/pages/Areas/Areas";
import { MenuOptions } from "@/constants";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/sidebar-new/app-sidebar";
import WorkoutContainer from "@/pages/Workout/WorkoutContainer";

const Dashboard = () => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>();
  let selectComponent = null;

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Update the state after the asynchronous operation is complete
      menuItems.map((singleItem) => {
        if (singleItem.isSelected) {
          setSelectedMenu(singleItem);
        }
      });
    };
    fetchData();
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case MenuOptions.ALL_HABITS:
      selectComponent = <AllHabits />;
      break;
    case MenuOptions.WORKOUT:
      selectComponent = <WorkoutContainer />;
      break;
    case MenuOptions.STATISTICS:
      selectComponent = <Statistics />;
      break;
    case MenuOptions.AREAS:
      selectComponent = <Areas />;
      break;
    case "":
      break;
  }

  return (
    <div className="flex bg-gray-100 dark:text-white">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SidebarProvider className="bg-white dark:bg-darkBackground">
          <AppSidebar />

          {selectComponent}
          {/* <BlackSoftLayer /> */}
        </SidebarProvider>
      </LocalizationProvider>
    </div>
  );
};

export default Dashboard;

// function BlackSoftLayer() {
//   const { openSideBarObject } = useGlobalContextProvider();
//   const { openSideBar } = openSideBarObject;
//   return (
//     <div
//       className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
//         openSideBar ? "fixed" : "hidden"
//       }`}
//     ></div>
//   );
// }
