import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const UserProfile = () => {
  const { user } = useUser();

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-14 h-14",
      userButtonPopoverActionButton: "text-red-600",
    },
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-8 max-lg:hidden">
      <UserButton appearance={userButtonAppearance} />
      <div>
        <span>{user?.fullName}</span>
      </div>
    </div>
  );
};

export default UserProfile;
