"use client";
import React, { useState } from "react";
import { useFormDatum } from "../../Context/FormData";
import { AiOutlineEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import CarAmount from "../CarAmount";
import { useGlobalContext } from "../../Context/GlobalContext";
import axios from "axios";
// import { data } from "autoprefixer";

const InfoView = ({ setInputType }) => {
  
  const { formDatum, setFormDatum, handleReset, handleShowCongratulation } = useFormDatum();

  console.log(formDatum);

  const [btnSubmit, setBtnSubmit] = useState({
    text: "Make The Order",
    isLoading: false,
  });

  const { setNextForm, handleBookNow } = useGlobalContext();

  const handleFocusInFormInputs = (inputname, num) => {
    setNextForm(num);
    setInputType(inputname);
  };

  const handleMakeOrder = async (e) => {

    e.preventDefault();
    setBtnSubmit({...btnSubmit, isLoading:true});
    const response = await axios.post("/api/userformsubmit", formDatum);
    console.log(response.status);
    if (response.status === 200) {
      setBtnSubmit({...btnSubmit, text: 'Successful'});
      console.log("Data sent");
      handleShowCongratulation() // This first function call changes the value of "showCongratulation" to true thereby rendering the <CongratulationMessage /> component
      // setTimeout(()=>{
      //   handleBookNow();
      //   handleShowCongratulation() // This second call changes the value back to it default value of false.
      //   handleReset();
      //   setNextForm(0);
      // },3000)
    }
    // console.log(response.status);
  };

  const handleRemoveVehicle = (name) => {
    setFormDatum({
      ...formDatum,
      carSelected: formDatum.carSelected.filter((veh) => veh.vehicle !== name),
    });
  };

  return (
    <div className="pb-5 pt-3 px-3 md:px-6 flex flex-col items-centerr w-full text-[rgba(0,0,0,0.8)] gap-y-5">
      {/* Name */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Name:
          </h2>
          <button disabled={btnSubmit.isLoading}
            onClick={() => handleFocusInFormInputs("name", 0)}
            className="cursor-pointer"
          >
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase">{`${formDatum.firstname}  ${formDatum.lastname}`}</p>
      </div>
      {/* Email */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Email:
          </h2>
          <button disabled={btnSubmit.isLoading}
            onClick={() => handleFocusInFormInputs("email", 0)}
            className="cursor-pointer"
          >
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] lowercase">{`${formDatum.email}`}</p>
      </div>
      {/* PICKUPLOCATION */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Pick-Up Location:
          </h2>
          <button disabled={btnSubmit.isLoading}
            onClick={() => handleFocusInFormInputs("pickup", 0)}
            className="cursor-pointer"
          >
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase">{`${formDatum.pickUpLocation}`}</p>
      </div>
      {/* DROPOFFLOCATION */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Drop-Off Location:
          </h2>
          <button disabled={btnSubmit.isLoading}
            onClick={() => handleFocusInFormInputs("dropoff", 0)}
            className="cursor-pointer"
          >
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase">{`${formDatum.dropOffLocation}`}</p>
      </div>
      {/* START DATE */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Start Date:
          </h2>
          <button disabled={btnSubmit.isLoading} onClick={() => setNextForm(0)} className="cursor-pointer">
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase">{`${new Date(formDatum.startDates).toLocaleDateString()}`}</p>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.startDates.toJSON().slice(0,10).split('-').reverse().join('/')}`}</p> */}
      </div>
      {/* END DATE */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            End Date:
          </h2>
          <button disabled={btnSubmit.isLoading} onClick={() => setNextForm(0)} className="cursor-pointer">
            <AiOutlineEdit />
          </button>
        </div>
        <p className="font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase">{`${new Date(formDatum.endDate).toLocaleDateString()}`}</p>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.endDate.slice(0,10).split('-').reverse().join('/')}`}</p> */}
      </div>
      {/* CARS SELECTED */}
      <div className="border-primaryBlue border-b-2 flex flex-col gap-y-2 pb-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[15px] bg-[#011f26c0] w-fit px-2 py-1 text-white">
            Cars Selected:
          </h2>
          <button disabled={btnSubmit.isLoading} onClick={() => setNextForm(1)} className="cursor-pointer">
            <AiOutlineEdit />
          </button>
        </div>
        {/* <p className='font-medium text-[16px] text-[rgba(0,0,0,1)] uppercase'>{`${formDatum.carSelected.join()}`}</p> */}
        <div className="flex flex-col gap-y-2">
          {formDatum.carSelected.map((veh) => (
            <CarAmount data={veh} key={uuidv4()} remove={handleRemoveVehicle} btnDisable={btnSubmit.isLoading}/>
          ))}
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={(e) => handleMakeOrder(e)}
          disabled={btnSubmit.isLoading}
          type="submit"
          className="py-4 w-[90%] flex justify-center items-center rounded text-white font-semibold text-xl bg-primaryBlue uppercase bg-[#011F26]"
        >
          {btnSubmit.isLoading ? (
            <span className="loader block"></span>
          ) : (
            btnSubmit.text
          )}
        </button>
      </div>
    </div>
  );
};

export default InfoView;
