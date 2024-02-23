import React, { useRef, forwardRef, useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useGlobalContext } from "../../Context/GlobalContext";

// const inputStartRef = useRef();

export const ExampleDateContainer = forwardRef(({ value, onClick }, ref) => {
  //    const inputStartRef = useRef();
  const { inputRef } = useGlobalContext;

  return (
    <>
      <label className="text-base font-semibold mb-2 text-[rgb(34,64,114)]">
        Start Date:
      </label>
      <div className="flex gap-0 items-center" onClick={onClick} ref={ref}>
        <input
          type="text"
          value={value}
          className="p-2 text-base w-[90%] h-[45px] rounded-none rounded-l-md"
          placeholder="dd/mm/yyyy"
          ref={inputRef}
        />
        <span className="text-lg p-1  bg-white h-[45px] w-[10%] flex justify-center items-center rounded-r-md">
          <AiOutlineCalendar />
        </span>
      </div>
    </>
  );
});

export const EndDateElement = forwardRef(({ value, onClick }, ref) => {
  // const { formData, inputRef } = useGlobalContext();
  return (
    <>
      <label className="text-base font-semibold mb-2 text-[rgb(34,64,114)]">
        End Date:
      </label>
      <div
        className="flex gap-0 items-center"
        onClick={() => {
          // if(formData.startDates===''){           // on click of the div it first checks if the formInfo.startDates is an empty string,
          //  return inputRef.current.focus()       // if true it will focus the ExampleDateContainer input, if not it will continue the program
          // }
          onClick();
        }}
        ref={ref}
      >
        <input
          type="text"
          value={value}
          className="p-2 text-base w-[90%] h-[45px] rounded-none rounded-l-md disabled:bg-white"
          placeholder="dd/mm/yyyy"
          // disabled={formData.startDates === '' ? true : false}
        />
        <span className="text-lg p-1  bg-white h-[45px] w-[10%] flex justify-center items-center rounded-r-md">
          <AiOutlineCalendar />
        </span>
      </div>
    </>
  );
});
