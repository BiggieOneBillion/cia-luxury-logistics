"use client";

import {
  EndDateElement,
  ExampleDateContainer,
} from "@/components/FormInputsDate_Component/FormInfoLogic";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
// import { userOrderEditSchema } from "../../../../../utils/validations/userOrderEditValidation";
import { userEditSchema } from "@/utils/validations/userOrderEditValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const EditDialogForm = ({ data, close }) => {
  const [infoData, setInfoData] = useState({ ...data });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userEditSchema),
    defaultValues: {
      firstName: infoData.firstName,
      lastName: infoData.lastName,
      email: infoData.email,
    },
  });

  const onSubmit = (values) => {
    // console.log(11233);
    // console.log(values);
    const updatedValue = {
      ...infoData,
      ...values,
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
      <div className="flex justify-between items-center">
        <button
          className="px-5 py-2 font-semibold text-white bg-blue-500 rounded-md disabled:bg-blue-200"
          onClick={handleSubmit(onSubmit)}
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
