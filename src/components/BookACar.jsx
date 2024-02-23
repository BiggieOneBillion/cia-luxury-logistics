import React from "react";
import { MdCall } from "react-icons/md";

const BookACar = () => {
  return (
    <div className="reach-us-bg flex flex-col lg:flex-row lg:justify-between h-[30rem] lg:px-[10%] justify-center items-center text-white mt-16 lg:h-[20rem] mb-10 lg:mb-0">
      <div>
        <h2 className="font-bold text-[2rem] text-center lg:text-start capitalize ">
          Book a car by <br className="hidden lg:block" /> getting in touch with
          us
        </h2>
      </div>
      <div className="shake-con cursor-pointer">
        <p className="shake font-medium text-center flex items-center justify-center gap-1 text-lg">
          <MdCall className="cursor-pointer shake-slow" />
          call to book
        </p>
        <h2 className="font-bold text-[2rem] text-primaryYellow">
          (234) 092-4620
        </h2>
      </div>
    </div>
  );
};

export default BookACar;
