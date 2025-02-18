import React from "react";
import Image from "next/image";
import { Label } from "../ui/label";

const LogoAndName = () => {
  return (
    <>
      <div className="flex gap-2 items-center sm:justify-start justify-between mt-20">
        <span className="text-2xl font-light flex items-center gap-2">
          <div className="p-2 rounded-md">
            <Image
              src={"/assets/icons/goal.png"}
              width={80}
              height={80}
              alt="fittrack"
            />
          </div>
          <span className="font-bold text-primary dark:text-white">Habit</span>
          <span className="font-bold text-primary dark:text-white">
            Stacker
          </span>
        </span>
      </div>
    </>
  );
};

export default LogoAndName;
