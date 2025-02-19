import React, { useEffect } from "react";
import AllHabitsSearchBar from "./AllHabitsSearchBar";
import DarkMode from "./DarkMode";

import { UserButton, useUser } from "@clerk/nextjs";
import { useGlobalContextProvider } from "@/types/contextApi";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AllHabitsTopbar = () => {
  const { openSideBarObject } = useGlobalContextProvider();
  const { setOpenSideBar } = openSideBarObject;
  const { user } = useUser();

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10",
      userButtonPopoverActionButton: "text-red-600",
    },
  };
  // function openSideBarFunction() {
  //   setOpenSideBar(!openSideBar);
  // }
  useEffect(() => {
    function handleResize() {
      setOpenSideBar(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-darkBackground dark:border-white/[0.2] border-black/[0.1] border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:text-white p-5 rounded-md flex justify-between">
        <div className=" gap-4 max-lg:flex hidden">
          <div>
            <UserButton appearance={userButtonAppearance} />
          </div>
        </div>
        <span>
          <SidebarTrigger className="w-10 h-10" />
        </span>
        <div className="w-full flex flex-col max-md:hidden">
          <span className="text-2xl ">
            <span className="font-bold">👋 Hi, There</span>
            <span className="font-light">{`, ${user?.fullName}`}</span>
          </span>
          <span className="font-light text-[12px]  text-gray-400">
            Welcome back!
          </span>
        </div>
        <div className="w-[50%] max-md:w-[80%] flex gap-3 justify-between">
          <AllHabitsSearchBar />
          <DarkMode />
          {/* <ThemeChanger /> */}
          {/* <FontAwesomeIcon
            onClick={openSideBarFunction}
            icon={faBars}
            className="m-2 max-xl:flex hidden mt-[13px] cursor-pointer"
          /> */}
        </div>
      </div>
    </>
  );
};

export default AllHabitsTopbar;
