"use client";
import React from "react";

const Info = () => {
  return (
    <div className="right-section-top basis-[100px] lg:px-10 border-b flex items-center gap-5 justify-between">
      <h1 className="text-xl font-semibold text-black">Welcome</h1>
      <div className="flex items-center gap-5">
        {/* user name and position */}
        <div className="space-y-1">
          <p className="text-sm text-black font-medium">Raymond Chukwu</p>
          <p className="text-xs text-gray-500 font-normal p-1 border rounded-lg w-fit">
            Super Admin
          </p>
        </div>
        {/* user image container */}
        <div className="w-[50px] h-[50px] rounded-full border overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Info;
