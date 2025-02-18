import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const HabitsEmptyPlaceHolder = () => {
  return (
    <div className="flex justify-center items-center p-5 flex-col">
      {/* <FontAwesomeIcon icon={faRectangleList} className="text-gray-400" /> */}
      <Skeleton className="h-6 w-40 mt-3 rounded-full ">
        <div className="mx-2">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-400 text-sm m-0"
          />
        </div>
      </Skeleton>
      {/* <span className="text-[13px] text-gray-400">
        Nothing scheduled for this day!
      </span> */}
      <span className="font-medium text-lg ">The Start of a Better Day!</span>
      <p className=" text-gray-400">
        Habits are like dominos. As one is formed , all others will follow.
      </p>
      <span> Let's Go!!</span>
    </div>
  );
};

export default HabitsEmptyPlaceHolder;
