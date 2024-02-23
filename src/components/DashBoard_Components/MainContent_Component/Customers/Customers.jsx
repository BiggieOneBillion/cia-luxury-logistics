"use client";
import React, { useEffect, useState } from "react";
import TableSection from "../Tables/Table";
import { columnData } from "./Columns";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

const Customers = () => {
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  const handleAddSerialNumber = (param) => {
    const result = param.result.map((datum, index) => {
      return { ...datum, serialNumber: index + 1 };
    });

    setData(result);
  };

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => handleAddSerialNumber(res.data))
      .catch((error) => console.log(error));
  }, []);

  // data && console.log(data);
  return (
    <div className="space-y-10">
      <h2 className="text-lg font-semibold text-black">Customers</h2>
      {/* TABLE */}
      <section className="table space-y-5">
        <div className="flex justify-start py-1 border-b w-fit items-baseline">
          <input
            type="text"
            className="w-[200px] py-[2px]y caret-black text-black text-sm outline-none  placeholder:text-xs placeholder:text-subText placeholder:font-semibold  border-gray-200"
            placeholder="Type to search"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
          <button className=" px-2 text-gray-500 border-gray-200 py-[6px] text-[17px]">
            <AiOutlineSearch />
          </button>
        </div>
        {data.length > 0 && (
          <TableSection
            columnData={columnData}
            mData={data}
            filterState={filterState}
          />
        )}
      </section>
    </div>
  );
};

export default Customers;
