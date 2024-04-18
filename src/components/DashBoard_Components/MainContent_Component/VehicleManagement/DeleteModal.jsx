"use client";
import React, { useState } from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const DeleteModal = ({ data, close }) => {
  const [btnText, setBtnText] = useState("Delete");
  console.log( data._id);
  const handleDelete = async () => {
    setBtnText("Loading...");
    try {

      const result = await axios.post("/api/vehicle/delete", { _id: data._id });
    //   console.log(result);
      if (result.status === 200) {
        setBtnText("Done!!");
        setTimeout(() => {
          close();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[300px] space-y-10">
      <h2 className="font-semibold capitalize text-lg text-black text-center">
        Are you Sure you want to delete
      </h2>

      <div className="flex justify-center gap-10 items-center">
        <button
          className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:bg-blue-200 active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out"
          onClick={handleDelete}
          disabled={btnText === "Loading..."}
        >
          {btnText}
        </button>
        <button
          className="px-5 py-2 font-semibold text-white bg-red-500 rounded-md disabled:bg-red-300 disabled:cursor-not-allowed"
          onClick={() => close()}
          disabled={btnText === "Loading..."}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
