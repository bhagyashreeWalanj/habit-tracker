import { Input } from "@/components/ui/input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AllHabitsSearchBar = () => {
  return (
    <div className="w-[75%]">
      <div className="flex gap-3 items-center p-1 bg-slate-50  dark:bg-slate-800 rounded-3xl">
        <FontAwesomeIcon
          width={20}
          height={20}
          icon={faSearch}
          className="text-gray-300 ml-2"
        />
        <Input
          className={` border-0 text-lg font-normal text-black dark:text-white bg-slate-50 dark:bg-slate-800 w-full`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default AllHabitsSearchBar;
