import React, { useEffect, useRef, useState } from "react";
import FormOneDate from "../FormInputsDate_Component/FormOneDate";
import TextInput from "./TextInput";
import { useGlobalContext } from "../../Context/GlobalContext";
import FormInputs from "./FormInputs";
import { motion } from "framer-motion";
import Carcards from "./Carcards";
import SelectACar from "./SelectACar";
import { FormContextProvider, useFormDatum } from "../../Context/FormData";
import { MdOutlineClose } from "react-icons/md";
import InfoView from "./InfoView";
import ReactDOM from "react-dom";

const FormInfo = () => {
  const { handleBookNow, nextForm, setNextForm } = useGlobalContext();

  const { handleReset } = useFormDatum();

  const handleClose = (e) => {
    if (e.target.classList.contains("fixedContainer")) {
      handleBookNow();
      handleReset();
      setNextForm(0);
    }
  };

  const formInputRef = useRef();

  const [inputType, setInputType] = useState(null);

  useEffect(() => {
    inputType === null
      ? null
      : inputType === "name"
      ? formInputRef.current.focusFirstname()
      : inputType === "email"
      ? formInputRef.current.focusEmail()
      : inputType === "pickup"
      ? formInputRef.current.focusPickUp()
      : inputType === "dropoff"
      ? formInputRef.current.focusDropOff()
      : null;
  }, [inputType]);

  return ReactDOM.createPortal(
    // < FormContextProvider>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] h-[100vh] w-[100vw] lg:py-[40vh] flex justify-center items-center z-[200] overflow-y-scrollt fixedContainer"
      onClick={(e) => handleClose(e)}
    >
      <motion.div
        className="bg-[rgba(255,255,255,0.9)] mt-[25vh] md:mt-[8vh] lg:my-[5vh]  w-[100%] md:w-[500px] h-[95%] md:h-[85vh] lg:h-[95vh] overflow-y-scroll pb-20 md:pb-0 rounded-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-end md:hiddenu my-3 px-4 ">
          <button
            className="border-2 p-1 border-neutral-800 text-black"
            onClick={() => {
              handleBookNow();
              handleReset();
              setNextForm(0);
            }}
          >
            <MdOutlineClose />
          </button>
        </div>
        <p className="w-[90%] mx-auto py-3 text-[rgba(0,0,0,0.8)] shadow-sm px-2 mt-2 noteWarning text-red-700">
          Note!! This is the first step in booking process, please provide accurate information so that we can contact you to proceed further.
        </p>
        <div className={`${nextForm === 0 ? "block" : "hidden"}`}>
          <h2 className="font-bold uppercase w-[90%] mx-auto py-1 mt-2 text-[rgba(0,0,0,0.8)] text-xl mb-4">
            Contact Information
          </h2>
          <FormInputs ref={formInputRef} />
        </div>

        <div className={`${nextForm === 1 ? "block" : "hidden"}`}>
          <h2 className="font-bold uppercase w-[90%] mx-auto py-1 mt-2 text-[rgba(0,0,0,0.8)] text-xl mb-4">
            Choose A Car
          </h2>
          <SelectACar />
        </div>

        <div className={`${nextForm === 2 ? "block" : "hidden"}`}>
          <h2 className="font-bold uppercase w-[90%] mx-auto py-1 mt-2 text-[rgba(0,0,0,0.8)] text-xl mb-4">
            Details
          </h2>
          <InfoView setInputType={setInputType} />
        </div>
      </motion.div>
    </motion.div>,

    document.getElementById("modal-root")
    // </FormContextProvider>
  );
};

export default FormInfo;
