"use client";

import React, { useEffect } from "react";
import { GrStatusGood } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "@/Context/GlobalContext";
import { useFormDatum } from "@/Context/FormData";
import { motion } from "framer-motion";

const CongratulationMessage = () => {
  const el = document.getElementById("modal-root");
  const { setNextForm, handleBookNow } = useGlobalContext();
  const { handleReset, handleShowCongratulation } = useFormDatum();
  const handleClose = () => {
    handleBookNow();
    handleShowCongratulation();
    handleReset();
    setNextForm(0);
  };
  return ReactDOM.createPortal(
    <div className="fixed z-[100] top-0 left-0 h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)]">
      <div className="md:w-[300px] mx-3 w-full lg:w-[500px] py-16 lg:py-20 px-5 lg:px-10 flex flex-col gap-8 items-center justify-center bg-white relative">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-[35px] font-bold text-black">Congratulations!</h1>
          <span className="text-3xl text-green-900">
            <GrStatusGood />
          </span>
        </div>
        <p className="font-medium text-base text-[rgba(0,0,0,0.6)] flex flex-col items-center text-center">
          <span className="flex items-center gap-2">
            You have completed your order{" "}
            <FaThumbsUp className="mb-1 text-green-600" />
          </span>
          <span>Thank you for choosing CIALuxury Fleet</span>
          <span>Please check your email for further instructions.</span>
        </p>
        <motion.button whileTap={{scale:0.95}} onClick={handleClose} className=" text-black bg-white text-xl h-[50px]y w-[50px]y p-1 border rounded-full flex justify-center items-center absolute top-[-25px]y top-2 right-[-35px]y right-2">
          <MdClose />
        </motion.button>
      </div>
    </div>,
    el
  );
};

export default CongratulationMessage;
