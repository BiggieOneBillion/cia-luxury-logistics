"use client";
import React, { useState, useEffect } from "react";
import TableSection from "../Tables/Table";
import { AiOutlineSearch } from "react-icons/ai";
import { columnData } from "./Columns";
import axios from "axios";
import mData from "./mockData.json";
import AddVehicle from "./AddVehicle";

const VehicleManagement = () => {
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  useEffect(() => {
    axios
      .get("/api/vehicle")
      .then((res) => setData(res.data.result))
      .catch((error) => console.log(error));
  }, []);

  // console.log(data);

  return (
    <div className="space-y-10">
      <h1 className="font-semibold text-black text-xl">Vehicle Management</h1>
      {data.length == 0 && (
        <h1 className="h-[500px] flex justify-center items-center text-2xl font-semibold text-black">
          Loading...
        </h1>
      )}
      {data.length > 0 && (
        <>
          <AddVehicle />
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
        </>
      )}
    </div>
  );
};

export default VehicleManagement;
