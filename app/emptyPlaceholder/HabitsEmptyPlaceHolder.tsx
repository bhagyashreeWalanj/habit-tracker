import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skeleton } from "@/components/ui/skeleton";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const HabitsEmptyPlaceHolder = () => {
  return (
    <div className="flex justify-center items-center p-5 flex-col">
      <Skeleton className="h-6 w-40 mt-3 rounded-full">
        <div className="mx-2">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-400 text-sm m-0"
          />
        </div>
      </Skeleton>
      <span className="font-medium text-lg ">The Start of a Better Day!</span>
      <p className="text-gray-400">
        Habits are like dominos. As one is formed , all others will follow.
      </p>
      <span> Let&apos;s Go!!</span>
    </div>
  );
};

export default HabitsEmptyPlaceHolder;
