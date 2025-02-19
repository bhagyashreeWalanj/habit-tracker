"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Topbar = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10",
      userButtonPopoverActionButton: "text-red-600",
    },
  };

  return (
    <>
      <div className="max-lg:flex-col w-full flex flex-row text-center gap-0 bg-white dark:bg-darkBackground">
        <div className="flex-col flex-grow m-1">
          <div className="bg-white dark:bg-darkBackground dark:border-white/[0.2] border-black/[0.1] border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:text-white p-5 rounded-md flex justify-between">
            <div className=" gap-4 max-lg:flex hidden">
              <div>
                <UserButton appearance={userButtonAppearance} />
              </div>
            </div>
            <span>
              <SidebarTrigger className="w-10 h-10" />
            </span>
            <div className="w-full ">
              <h1 className="text-2xl font-bold tracking-tight">
                {title} Dashboard
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            </div>
            {/* <span className="w-full flex flex-col max-md:hidden text-center items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {title}
              </span>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
