"use client";

import React, { useState } from "react";
import TableSection from "../Tables/Table";
import { AiOutlineSearch } from "react-icons/ai";

const Index = ({ data, columnData }) => {
  // console.log(data);

  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  return (
    <section className="table space-y-5">
      <div className="flex justify-start items-baseline border-b w-fit py-1  ">
        <input
          type="text"
          className="w-[200px] py-[2px]y caret-black text-black text-sm outline-none placeholder:text-xs placeholder:text-subText placeholder:font-semibold  border-gray-200"
          placeholder="Type to search"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
        <button className=" px-2 text-black border-gray-200 py-[6px] text-[17px]">
          <AiOutlineSearch />
        </button>
      </div>

      <TableSection
        columnData={columnData}
        mData={data}
        filterState={filterState}
      />
    </section>
  );
};

export default Index;
