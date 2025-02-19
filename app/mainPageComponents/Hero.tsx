import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col mx-16 items-center mt-[100px] gap-6 ">
        <span className="font-bold text-6xl text-center">
          Build the habits that <span className="text-primary">matter!</span>
        </span>
        <p className="text-center text-lg sm:w-1/4  w-[400px]">
          Feeling overwhelmed? Our easy-to-use fit tracker helps you take
          control of your day and achieve your goals.
        </p>
        <button
          className="block text-sm font-light rounded-lg  px-9 py-3  text-white transition bg-primary   focus:outline-none  "
          type="button"
        >
          Let&apos;s get started!
        </button>
      </div>
    </div>
  );
};

export default Hero;
