"use client";
import { useGlobalContext } from "@/Context/GlobalContext";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import ReactDOM from "react-dom";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import EditOrder from "./EditOrder";

const OrderDetails = ({ closeFn }) => {

  return ReactDOM.createPortal(
    <EditOrder close={closeFn}/>,
    document.getElementById("modal-root")
  );
};

export default OrderDetails;
