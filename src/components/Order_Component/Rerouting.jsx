"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Context/GlobalContext";
import OrderDetails from "./OrderDetails";

const Rerouting = () => {
  const { orderDetail } = useGlobalContext();

//   console.log("rand");
console.log(orderDetail);

  // const router = useRouter();

  // if (orderDetail == "") {
  //   router.push("/order");
  //   return;
  // }
  return <OrderDetails />;
};

export default Rerouting;
