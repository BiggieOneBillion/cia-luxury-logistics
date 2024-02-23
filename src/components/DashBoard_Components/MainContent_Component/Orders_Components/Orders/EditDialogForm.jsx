"use client";

import {
  EndDateElement,
  ExampleDateContainer,
} from "@/components/FormInputsDate_Component/FormInfoLogic";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { userOrderEditSchema } from "../../../../../utils/validations/userOrderEditValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const EditDialogForm = ({ data, close }) => {
  const [infoData, setInfoData] = useState({ ...data });

  //   {
  //     "_id": "65b3df0c96dd5dd59c0b4145",
  //     "firstName": "CHINWENDU",
  //     "lastName": "CHUKWU",
  //     "email": "rchukwu96@gmail.com",
  //     "pickupLocation": "ada-geoge ",
  //     "dropoffLocation": "locationhide",
  //     "startDate": "1/28/2024",
  //     "endDate": "1/30/2024",
  //     "carsSelected": [
  //         "TOYOTA LANDCRUISER",
  //         "LEXUS 570"
  //     ],
  //     "__v": 0,
  //     "paymentStatus": false
  // }

  //  THIS FUNCTION CHANGES THE FORMAT OF THE DATE COMING FROM THE DATABASE SO IT CAN BE DISPLAYED BY THE HTML INPUT DATE TYPE. THIS IS DONE AS THE DEFAULT FORMAT FROM THE DATABASE CANNOT BE ACCEPTED BY THE INPUT.
  function handleChangeDateForm(dateString) {
    const date = new Date(dateString);
    const offset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - offset);
    const formattedDate = localDate.toISOString().split("T")[0];
    return formattedDate;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userOrderEditSchema),
    defaultValues: {
      firstName: infoData.firstName,
      lastName: infoData.lastName,
      email: infoData.email,
      pickupLocation: infoData.pickupLocation,
      dropoffLocation: infoData.dropoffLocation,
      startDate: handleChangeDateForm(infoData.startDate),
      endDate: handleChangeDateForm(infoData.endDate),
    },
  });

  const onSubmit = (values) => {
    // console.log(11233);
    console.log(values);
    const updatedValue = {
      ...values,
      carsSelected: infoData.carsSelected,
      _id: infoData._id,
    };
    // console.log(updatedValue);
  };

  const InputComponent = ({ label, inputType, id, register }) => {
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
          {...register(id)}
        />
        {errors[id] && (
          <span className="text-sm font-medium text-red-900">
            {errors[id].message}
          </span>
        )}
      </div>
    );
  };

  const SelectInput = ({ infoData, setInfoData }) => {
    const carData = [
      {
        vehicleType: "Suv",
        options: ["Toyota Prado", "Toyota Landcruiser", "Lexus 570"],
      },
      {
        vehicleType: "Sedan",
        options: ["Toyota Corolla", "Toyota Camry", "Benz c300"],
      },
      {
        vehicleType: "Bus",
        options: ["Toyota Coaster", "Toyota Hiace", "Nissian Civilian"],
      },
    ];

    const [error, setError] = useState("");

    const addToCarSelected = (option) => {
      console.log(option);
      const check = infoData.carsSelected.filter(
        (el) => el == option.toUpperCase()
      );
      if (check.length == 0) {
        setInfoData({
          ...infoData,
          carsSelected: [option, ...infoData.carsSelected],
        });
        setError("");
      } else {
        setError("Car Already Selected!.");
      }
    };

    const removeFromCarSelected = (option) => {
      setInfoData({
        ...infoData,
        carsSelected: infoData.carsSelected.filter(
          (el) => el.toUpperCase() !== option.toUpperCase()
        ),
      });
    };

    const allOptions = [
      ...carData[0].options,
      ...carData[1].options,
      ...carData[2].options,
    ];

    return (
      <div className="space-y-4">
        <h2>Cars Selected</h2>
        <div className="space-y-2">
          <div className="flex justify-start flex-wrap items-center gap-4">
            {infoData.carsSelected.length > 0 ? (
              infoData.carsSelected.map((cars) => (
                <p key={v4()} className="px-2 py-1 border relative uppercase">
                  <span>{cars}</span>
                  <span
                    className="text-sm bg-white border flex justify-center hover:scale-[.96] active:scale-[.93] cursor-pointer transition-transform duration-300 ease-in-out items-center rounded-full size-5 absolute top-[-50%] right-[-8px]"
                    onClick={() => removeFromCarSelected(cars)}
                  >
                    x
                  </span>
                </p>
              ))
            ) : (
              <span className="text-red-600 font-medium text-sm">
                Atleast One Car Must Be Selected!
              </span>
            )}
          </div>
        </div>
        <div className="border p-1 w-fit rounded-md">
          <select
            onChange={(e) => addToCarSelected(e.target.value)}
            className="uppercase outline-none border-none"
          >
            <option value="">Select To Add</option>
            {allOptions.map((opt) => (
              <option key={v4()} value={opt} className="uppercase">
                {opt}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <span className="text-red-800 text-xs font-medium inline-block px-2">
            {error}
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
          label={"First Name"}
          id={"firstName"}
          register={register}
        />
        <InputComponent
          inputType={"text"}
          label={"Last Name"}
          id={"lastName"}
          register={register}
        />
      </div>
      <InputComponent
        inputType={"email"}
        label={"Email"}
        id={"email"}
        register={register}
      />
      <InputComponent
        inputType={"text"}
        label={"Pick Up Location"}
        id={"pickupLocation"}
        register={register}
      />
      <InputComponent
        inputType={"text"}
        label={"Drop Off Location"}
        id={"dropoffLocation"}
        register={register}
      />
      <div className="grid lg:grid-cols-2 gap-4">
        <InputComponent
          inputType={"date"}
          label={"Start Date"}
          id={"startDate"}
          register={register}
        />
        <InputComponent
          inputType={"date"}
          label={"End Date"}
          id={"endDate"}
          register={register}
        />
      </div>
      <SelectInput infoData={infoData} setInfoData={setInfoData} />
      <div className="flex justify-between items-center">
        <button
          className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:bg-blue-200"
          onClick={handleSubmit(onSubmit)}
          disabled={infoData.carsSelected.length == 0 ? true : false}
        >
          Update
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
