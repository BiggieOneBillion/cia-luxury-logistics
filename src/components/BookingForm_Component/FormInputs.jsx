"use client";

import React from "react";
// import FormOneDate from './FormOneDate'
import TextInput from "./TextInput";
import { useState, forwardRef, useRef, useImperativeHandle } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  EndDateElement,
  ExampleDateContainer,
} from "../FormInputsDate_Component/FormInfoLogic";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useFormDatum } from "../../Context/FormData";
import { useForm } from "react-hook-form";
import { userDetailsSchema } from "@/utils/validations/userOrderValidations";
import { zodResolver } from "@hookform/resolvers/zod";

const FormInputs = (props, ref) => {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const pickUpRef = useRef();
  const dropOffRef = useRef();
  const phoneNumberRef = useRef();

  useImperativeHandle(ref, () => {
    const handleAction = (refname) => {
      refname.current.style.backgroundColor = "#BBDEFB";
      setTimeout(
        () => (refname.current.style.backgroundColor = "transparent"),
        2000
      );
    };
    return {
      focusFirstname: () => handleAction(firstnameRef),
      focusLastname: () => handleAction(lastnameRef),
      focusEmail: () => handleAction(emailRef),
      focusPickUp: () => handleAction(pickUpRef),
      focusDropOff: () => handleAction(dropOffRef),
    };
  });

  const { setNextForm } = useGlobalContext();

  const { formDatum, setFormDatum, handleFormDatum } = useFormDatum();

  // const inputStartRef = useRef();

  const [show, setShow] = useState("return");
  // THIS USESTATE IS USED FOR CONDITIONALLY RENDERING THE RETURN DATE IN THE UI
  const [returnDate, setReturnDate] = useState(true);

  // const {toggle, handleToggle} = useToggle(true)
  // THE FUNCTION IS USED TO HANDLE THE RETURNDATE VALUE
  const handleReturn = () => {
    setShow("return");
    setReturnDate(true);
  };

  const handleOneway = () => {
    setShow("oneway");
    setReturnDate(false);
  };

  // THE DATEPICKER IMPLEMENTATION
  const [startDate, setStartDate] = useState(null);

  const [endDates, setEndDate] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      firstname: formDatum.firstname,
      lastname: formDatum.lastname,
      email: formDatum.email,
      pickUpLocation: formDatum.pickUpLocation,
      dropOffLocation: formDatum.dropOffLocation,
      phoneNumber: formDatum.phoneNumber,
    },
  });

  // THIS IS DONE TO GET THE AMOUNT OF DAYS BETWEEN THE CURRENT DATE AND THE LAST DAY OF THE YEAR
  // SO AS TO SET THE INCLUDED DAYS LEFT IN THE CALENDAR

  // const oneDay = 1000 * 60 * 60 * 24
  // const presentDay = new Date()
  // const yearEnd = new Date(presentDay.getFullYear, 11, 31)
  // const amountOfDaysLeft = Math.round(yearEnd.getTime() - presentDay.getTime()) / oneDay
  // const finalResult = amountOfDaysLeft.toFixed(0)
  //console.log(formData);

  const onSubmit = (values) => {
    // console.log(values);
    setFormDatum({ ...formDatum, ...values });
    setNextForm(1);
  };

  return (
    <form className="pb-10 pt-3 flex flex-col items-center w-full text-[rgba(0,0,0,0.8)] gap-y-3">
      <div ref={firstnameRef} className="w-full">
        <TextInput
          InputStyle={"py-2 px-2 w-full"}
          field="text"
          label="First Name"
          placeholder="Please Enter Your First Name"
          errors={errors}
          register={register}
          id="firstname"
        />
      </div>
      <div ref={lastnameRef} className="w-full">
        <TextInput
          field="text"
          InputStyle={"py-2 px-2 w-full"}
          label="Last Name"
          placeholder="Please Enter Your Last Name"
          register={register}
          errors={errors}
          id="lastname"
        />
      </div>
      <div ref={emailRef} className="w-full">
        <TextInput
          field="email"
          InputStyle={"py-2 px-2 w-full"}
          label="Email"
          placeholder="Please Enter Your Email"
          errors={errors}
          register={register}
          id="email"
        />
      </div>
      <div ref={phoneNumberRef} className="w-full">
        <TextInput
          field="tel"
          InputStyle={"py-2 px-2 w-full"}
          label="Phone Number"
          placeholder="Please Enter Your Phone Number"
          errors={errors}
          register={register}
          id="phoneNumber"
        />
      </div>
      <div ref={pickUpRef} className="w-full">
        <TextInput
          field="text"
          InputStyle={"py-2 px-2 w-full"}
          label="Pick up Location"
          placeholder="Enter Your Pick-up Location"
          errors={errors}
          register={register}
          id="pickUpLocation"
        />
      </div>
      <div ref={dropOffRef} className="w-full">
        <TextInput
          field="text"
          InputStyle={"py-2 px-2 w-full"}
          label="Drop-off Location"
          placeholder="Enter Your Drop-off Location"
          errors={errors}
          register={register}
          id="dropOffLocation"
        />
      </div>
      {/* <FormOneDate /> */}
      <div className="flex flex-col gap-y-4 w-[90%] mt-4">
        <div className="flex gap-x-2">
          <div>
            <label
              htmlFor="returnBack"
              className={
                show === "return"
                  ? "border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md"
                  : "border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md"
              }
              onClick={handleReturn}
            >
              Return
            </label>
            <input
              type="radio"
              name="return"
              id="returnBack"
              className="hidden"
              value={show === "return"}
              disabled={show === "return"}
              onChange={handleReturn}
            />
          </div>

          <div>
            <label
              htmlFor="oneWay"
              className={
                show === "oneway"
                  ? "border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md"
                  : "border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md"
              }
              onClick={handleOneway}
            >
              One Way
            </label>
            <input
              type="radio"
              name="return"
              id="oneWay"
              className="hidden"
              value={show === "oneway"}
              onChange={handleOneway}
            />
          </div>
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            // console.log(typeof date)
            setFormDatum({ ...formDatum, startDates: date });
          }}
          customInput={<ExampleDateContainer />}
          minDate={new Date()}
        />

        {returnDate && (
          <DatePicker
            selected={endDates}
            onChange={(date) => {
              setEndDate(date);
              setFormDatum({ ...formDatum, endDate: date });
            }}
            customInput={<EndDateElement />}
            disabled={formDatum.startDates === "" ? true : false}
            minDate={formDatum.startDates} // The minimum start dates which is derived from the formInfo.startDates which saves the value of the input start date
          />
        )}
      </div>
      <button
        className="py-3 mt-2 font-semibold text-lg uppercase rounded-sm text-white bg-[#011F26] disabled:bg-[#011f263a] disabled:cursor-not-allowed w-[90%]"
        onClick={handleSubmit(onSubmit)}
        disabled={formDatum.startDates && formDatum.endDate ? false : true}
      >
        Select A Car
      </button>
    </form>
  );
};

// export default FormInputs;
export default React.forwardRef(FormInputs);
