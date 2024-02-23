"use client";
import React, { useEffect, useState } from "react";
import Index from "../Index";
import axios from "axios";
import { columnData } from "./Columns";

const UrgentOrders = () => {
  const [data, setData] = useState([]);

  const sortedArr = (dates) => {
    const currentDate = new Date();

    const result = dates
      .sort((a, b) => {
        const diffA = new Date(a.startDate) - currentDate;
        const diffB = new Date(b.startDate) - currentDate;
        return diffB - diffA;
      })
      .filter((el) => (new Date(el.startDate) - currentDate) > -86400000);
    return result;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user");
      const input = response.data.result;
      const updatedData = sortedArr(input);
      setData(updatedData);
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 && <Index data={data} columnData={columnData} />}
      {data.length == 0 && (
        <h1 className="text-2xl text-black font-semibold w-full text-center">
          Loading....
        </h1>
      )}
    </div>
  );
};

export default UrgentOrders;
