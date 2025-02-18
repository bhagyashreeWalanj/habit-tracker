import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-10 w-full h-screen bg-primary">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
