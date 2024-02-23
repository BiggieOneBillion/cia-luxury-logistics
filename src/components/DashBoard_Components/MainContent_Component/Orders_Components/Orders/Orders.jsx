"use client";
import React, { useEffect, useState } from "react";
import TableSection from "../../Tables/Table";
import { columnData } from "./Columns";
// import data from "../Customers/mockData.json"
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

const Orders = () => {
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => setData(res.data.result))
      .catch((error) => console.log(error));
  }, []);

  // data && console.log(data);
  return (
    <div className="space-y-10">
      {/* TABLE */}
      {data.length == 0 && (
        <h1 className="h-[500px] flex justify-center items-center text-2xl font-semibold text-black">
          Loading...
        </h1>
      )}
      {data.length > 0 && (
        <section className="table space-y-5">
          <div className="flex justify-start items-baseline py-1 border-b w-fit">
            <input
              type="text"
              className="w-[200px] py-[2px]y caret-black text-black text-sm outline-none  placeholder:text-xs placeholder:text-subText placeholder:font-semibold  border-gray-200"
              placeholder="Type to search"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
            />
            <button className="border-noney bordery px-2 text-black border-gray-200 py-[6px] text-[17px]">
              <AiOutlineSearch />
            </button>
          </div>

          <TableSection
            columnData={columnData}
            mData={data}
            filterState={filterState}
          />
        </section>
      )}
    </div>
  );
};

export default Orders;
