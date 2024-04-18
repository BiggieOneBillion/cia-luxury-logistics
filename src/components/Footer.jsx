"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { footerFormSchema } from "@/utils/Client_validations/validations";
import axios from "axios";

const Footer = () => {
  // let {scrollYProgress} = useScroll()
  // let y = useTransform(scrollYProgress, [0,1], ["0%","10%"])

  const [isDisable, setIsDisable] = useState(false);
  const [isSuccess, setIsSuccess] = useState({
    status: false,
    message: "",
  });

  const fullnameRef = useRef();
  const EmailnameRef = useRef();
  const MessageRef = useRef();
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    fullname: "",
    message: "",
  });
  const [, setRefresh] = useState(false);

  const validateAndSubmit = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    const inputValues = {
      email: EmailnameRef.current.value,
      fullname: fullnameRef.current.value,
      message: MessageRef.current.value,
    };
    if (footerFormSchema.safeParse(inputValues).success) {
      await axios
        .post("/api/leave-a-message", {
          fullName: inputValues.fullname,
          email: inputValues.email,
          message: inputValues.message,
        })
        .then((res) => {
          setIsSuccess({ ...isSuccess, status: true, message: "Message Delivered!" });
          setTimeout(
            () => setIsSuccess({ ...isSuccess, status: false, message: "" }),
            5000
          );
        })
        .catch((err) => console.log(err));
      resetInputValues();
    } else {
      const error = footerFormSchema.safeParse(inputValues).error.issues;
      handleFormError(error);
    }
    setIsDisable(false);
  };

  function handleFormError(error) {
    error.forEach((element) => {
      switch (element.path[0]) {
        case "email":
          setErrorMessage({ ...errorMessage, email: element.message });
          break;
        case "fullname":
          setErrorMessage({ ...errorMessage, fullname: element.message });
          break;
        case "message":
          setErrorMessage({
            ...errorMessage,
            message: "Message cannot be empty or less than 10 words!",
          });
          break;
        default:
          break;
      }
    });
  }

  function resetInputValues() {
    EmailnameRef.current.value = "";
    fullnameRef.current.value = "";
    MessageRef.current.value = "";
    setRefresh(true);
  }

  return (
    <motion.div
      className="containerz py-10 sm:h-[40vh] lg:h-[40vh]y footer relative flex justify-between items-center overflow-x-hidden md:overflow-x-visible  mt-10"
      id="contactUs"
    >
      <div className="flex flex-wrap items-center justify-center gap-10 gap-y-20 md:justify-between md:items-start w-full">
        {/* <div className='flex items-center'> */}
        <div className=" py-1 px-2 border-2 border-ry-[#D98E04] border-white font-[450] text-xl flex flex-col items-center lg:mr-10">
          <span className="text-[16px] leading-tight">CIA</span>
          <span className="text-[14px] leading-tight font-bold">Luxury</span>
          <span className="text-[12px] leading-tight italic">Fleet</span>
        </div>
        <ul className="font-medium flex flex-col gap-3">
          <li className="hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer">
            <Link href={"/fleet"}>Fleet Management</Link>
          </li>
          <li className="hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="hover:text-[rgb(255,255,255,0.7)] transition-all cursor-pointer">
            Speak with an agent
          </li>
          <li className="flex gap-4">
            <span title="Twitter" className="cursor-pointer">
              <FiTwitter />
            </span>
            <span title="Instagram" className="cursor-pointer">
              <FaInstagram />
            </span>
            <span title="Whatsapp" className="cursor-pointer">
              <FaWhatsapp />
            </span>
            <span title="Pinterest" className="cursor-pointer">
              <ImPinterest2 />
            </span>
          </li>
        </ul>
        {/* </div> */}
        <form className="flex flex-col gap-3 ml-autou">
          {isSuccess.status && (
            <span className="bg-green-800 text-center inline-block px-2 py-1 text-white text-xs font-medium">
              {isSuccess.message}
            </span>
          )}
          {errorMessage.fullname && (
            <span className="text-red-800 text-base  font-medium">
              {errorMessage.fullname}
            </span>
          )}
          <input
            type="text"
            className="py-1 rounded-sm border-2 bg-transparent px-2"
            placeholder="Fullname"
            ref={fullnameRef}
            required
            title="Enter Your Full name"
          />
          {errorMessage.email && (
            <span className="text-red-800 text-xs font-medium">
              {errorMessage.email}
            </span>
          )}

          <input
            type="email"
            className="py-1 rounded-sm border-2 bg-transparent px-2"
            placeholder="Email"
            ref={EmailnameRef}
            required
          />

          {errorMessage.message && (
            <span className="text-red-800 text-xs font-medium">
              {errorMessage.message}
            </span>
          )}
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="bg-transparent border-2 text-white px-2 py-2"
            placeholder="Leave a message"
            ref={MessageRef}
            required
          ></textarea>

          <button
            className="bg-[#D98E04] py-2 hover:bg-[#d98e04bd] disabled:bg-[#d98e0458] disabled:cursor-wait transition-all"
            onClick={(e) => validateAndSubmit(e)}
            disabled={isDisable}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Footer;
