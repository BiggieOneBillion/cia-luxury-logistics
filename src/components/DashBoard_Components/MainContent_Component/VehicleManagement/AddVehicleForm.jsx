"use client";
import React, { useState } from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addVehicleSchema } from "@/utils/Client_validations/validations";
import axios from "axios";

const AddVehicleForm = ({ close }) => {
  const [infoData, setInfoData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Add New");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addVehicleSchema),
  });

  const onSubmit = async (value) => {
    console.log(value);
    // PLEASE REMEMBER TO WRITE ZOD VALIDATION FOR THE INPUT VALUES SO AS NOT TO CORRUPT THE DATABASE.
    setBtnText("Loading...");
    try {
      const response = await axios.post("/api/vehicle", value);

      if (response.status === 200) {
        setBtnText("Done!!");
        setTimeout(() => {
          close();
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const InputComponent = ({ label, inputType, id, register }) => {
    let spread;
    if (inputType == "text") {
      spread = { ...register(id) };
    } else {
      spread = { ...register(id, { valueAsNumber: true }) };
    }
    return (
      <div className="space-y-3">
        <label
          htmlFor={id}
          className="text-gray-500 font-medium text-xs capitalize"
        >
          {label}:{" "}
        </label>
        <input
          type={inputType}
          id={id}
          className="w-full py-2 px-4 text-sm text-black rounded-lg border"
          {...spread}
        />
        {errors[id] && (
          <span className="text-sm font-medium text-red-900">
            {errors[id].message}
          </span>
        )}
      </div>
    );
  };

  return (
    <form className="w-[500px] space-y-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <InputComponent
          inputType={"text"}
          label={"Category"}
          id={"category"}
          register={register}
        />
        <InputComponent
          inputType={"number"}
          label={"Amount"}
          id={"amount"}
          register={register}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <InputComponent
          inputType={"text"}
          label={"Brand Name"}
          id={"brandName"}
          register={register}
        />
        <InputComponent
          inputType={"text"}
          label={"Model Name"}
          id={"modelName"}
          register={register}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <InputComponent
          inputType={"number"}
          label={"Seat Capacity"}
          id={"seatCapacity"}
          register={register}
        />
        <InputComponent
          inputType={"number"}
          label={"Fuel Capacity"}
          id={"fuelCapacity"}
          register={register}
        />
      </div>
      <InputComponent
        inputType={"text"}
        label={"Drive Train"}
        id={"driveTrain"}
        register={register}
      />

      <div className="flex justify-between items-center">
        <button
          className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:bg-blue-200 active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out"
          onClick={handleSubmit(onSubmit)}
          disabled={btnText === "Loading..."}
        >
          {btnText}
        </button>
        <button
          className="px-5 py-2 font-semibold text-white bg-red-500 rounded-md active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out"
          onClick={() => close()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddVehicleForm;
