"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { orderSchema } from "@/utils/Client_validations/validations";
import axios from "axios";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Context/GlobalContext";
import ReactDOM from "react-dom";
import OrderDetails from "./OrderDetails";

const Order = () => {
  const router = useRouter();

  const { handleOrderDetails } = useGlobalContext();

  const emailRef = useRef(null);
  const orderIdRef = useRef(null);

  const [btnState, setBtnState] = useState(false);
  // STATE THAT HANDLES CLOSING AND OPENING OF THE MODAL DEPENDING ON IT'S VALUE, EITHER TRUE OR FALSE.
  const [showModal, setShowModal] = useState(false);
  const [btnText, setBtnText] = useState("Submit");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRoute = (data) => {
    //  console.log(1111);
    handleOrderDetails(data);
    //  router.push('/order/details')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValues = {
      email: emailRef.current.value,
      order: orderIdRef.current.value,
    };
    console.log(inputValues);
    setBtnState(true);
    try {
      const isValid = orderSchema.safeParse(inputValues);
      console.log(isValid.success);
      if (isValid.success) {
        // get user order detail using order-id and email.
        // we make a get request, to get the entry from the database.
        const response = await axios.post(`api/user`, inputValues);
        if (response.status === 200) {
          setBtnState(false);
          setBtnText("Successful");
          //programmatically navigate to the user's order details coming from database..
          // console.log(response);
          handleRoute(response.data.result);
          setShowModal(true);
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-20 mt-20  grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:w-[80%] mx-auto">
      {/* description */}
      <div className="order-form-description space-y-3">
        <h1 className="text-white font-bold text-xl md:text-2xl">
          Enter your{" "}
          <span className="inline-block skew-x-[-6deg] mr-1 bg-[#D98E04] px-1">
            {" "}
            order-id
          </span>
          to view your order
        </h1>
        <p className="text-[rgba(255,255,255,0.7)] text-xs md:text-sm font-normal md:w-[400px] text-wrap">
          Your order id would be found in your email address or WhatsApp
          messenger After you have made your order using the book now button in
          the home page.
        </p>
      </div>
      {/* form  */}
      <div className="p-5 md:p-10 bg-[rgba(34,73,82,0.5)]y bg-[rgba(255,255,255,0.9)] rounded-lg md:w-fit">
        <form className="w-full space-y-8 py-5 md:py-10 ">
          {/* error message */}
          <div className="input-user-email md:w-[500px] text-black flex flex-col justify-center gap-1 ">
            <label htmlFor="user-email" className="text-gray-500 text-xs md:text-[15px]">
              Email :
            </label>
            <input
              ref={emailRef}
              type="email"
              name="user-email"
              className="caret-black text-base bg-[rgba(255,255,255,0.25)]y border py-2 px-3 w-full rounded-md outline-none"
            />
          </div>
          <div className="input-user-order-id md:w-[500px] text-black flex flex-col justify-center gap-1">
            <label htmlFor="user-order-d" className="text-gray-500 text-xs md:text-[15px]">
              Order Id :
            </label>
            <input
              ref={orderIdRef}
              type="email"
              name="user-order-id"
              className=" text-base bg-[rgba(255,255,255,0.25)]y border py-2 px-3 w-full rounded-md outline-none"
            />
          </div>
          <div className="submit-btn-container pt-2">
            <motion.button
              onClick={handleSubmit}
              disabled={btnState}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="text-white disabled:cursor-wait md:text-lg font-medium rounded-lg py-2 px-10 bg-[rgba(34,73,82,0.5)] hover:rounded-none transition-all"
            >
              {btnState ? <Loading /> : <span>{btnText}</span>}
            </motion.button>
          </div>
        </form>
      </div>
      {showModal && <OrderDetails closeFn={handleCloseModal} />}
    </div>
  );
};

export default Order;
