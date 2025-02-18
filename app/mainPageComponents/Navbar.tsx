"use client";
import LogoAndName from "@/components/sidebar/LogoAndName";
import { AppSidebar } from "@/components/sidebar/sidebar-new/app-sidebar";
import { useAuth } from "@clerk/nextjs";
import { AppleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { userId } = useAuth();
  console.log("userId", userId);
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            <LogoAndName />
            {/* {userId != null && userId != undefined ? <AppSidebar /> : ""} */}
          </div>

          <div>
            {userId != null && userId != undefined ? (
              <Link href={"/dashboard"}>
                <button
                  className="block rounded-lg px-9 py-3 text-sm font-medium text-white transition bg-primary"
                  type="button"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center sm:text-right ">
                <Link href={"/sign-in"}>
                  <button
                    className="block bg-primary sm:w-32 w-full rounded-lg  px-9 py-3 text-sm font-medium text-white transition   focus:outline-none  "
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button
                    className="block sm:w-32 w-full border rounded-lg  px-9 py-3 text-sm font-medium   transition   
              focus:outline-none hover:bg-primary hover:text-white  border-customRed text-customRed "
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
