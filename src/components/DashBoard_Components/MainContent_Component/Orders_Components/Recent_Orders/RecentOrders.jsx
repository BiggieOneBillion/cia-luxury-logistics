"use client";

import React, { useEffect, useState } from "react";
import Index from "../Index";
import axios from "axios";
import { columnData } from "./Columns";

const RecentOrders = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user");
      const reversedData = [...response.data.result].reverse();
      setData(reversedData);
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

export default RecentOrders;
