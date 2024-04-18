"use client";
import React, { useState } from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { addVehicleSchema } from "@/utils/validations/addVehicleValidation";

const EditDialogForm = ({ data, close }) => {
  const [infoData, setInfoData] = useState({ ...data });
  const [btnText, setBtnText] = useState('Update')

  // console.log(infoData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addVehicleSchema),
    defaultValues: {
      brandName: data.brandName,
      modelName: data.modelName,
      seatCapacity: data.seatCapacity,
      fuelCapacity: data.fuelCapacity,
      driveTrain: data.driveTrain,
      amount: data.amount,
      category: data.category,
    },
  });

  const onSubmit = async (value) => {
    // console.log(value);
    const inputValues = {
      ...value,
      _id: data._id,
    };
    // PLEASE REMEMBER TO WRITE ZOD VALIDATION FOR THE INPUT VALUES SO AS NOT TO CORRUPT THE DATABASE.
    setBtnText("Loading...");
    try {
      const response = await axios.put("/api/vehicle", inputValues);

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
    let spread 
    if (inputType == 'text') {
      spread = {...register(id)}
    } else {
      spread = {...register(id, { valueAsNumber: true })}
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
          className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:bg-blue-200"
          onClick={handleSubmit(onSubmit)}
          // disabled={infoData.carsSelected.length == 0 ? true : false}
        >
          {btnText}
        </button>
        <button
          className="px-5 py-2 font-semibold text-white bg-red-500 rounded-md"
          onClick={() => close()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditDialogForm;
