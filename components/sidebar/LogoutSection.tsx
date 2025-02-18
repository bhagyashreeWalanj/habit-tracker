"use client";

import React from "react";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton } from "@clerk/nextjs";

const LogoutSection = () => {
  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-28 hover:text-primary transition-all">
      <FontAwesomeIcon width={28} height={20} icon={faRightFromBracket} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default LogoutSection;
