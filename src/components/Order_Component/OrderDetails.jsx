"use client";
import { useGlobalContext } from "@/Context/GlobalContext";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import ReactDOM from "react-dom";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const OrderDetails = ({ closeFn }) => {
  const { orderDetail } = useGlobalContext();

  const router = useRouter();

  const [uploadMessage, setUploadMessage] = useState({
    color: "black",
    message: "",
  });

  // const handleUploadMessage = (message, color = "black") => {
  //   setUploadMessage(message);
  //   return (
  //     <p className={`text-xs font-medium text-${color}`}>{uploadMessage}</p>
  //   );
  // };

  const {
    firstName,
    lastName,
    email,
    pickupLocation,
    dropoffLocation,
    startDate,
    endDate,
    carsSelected,
    _id,
    paymentStatus,
  } = orderDetail[0];

  const handleClose = () => {
    // attach it to an onclick event handler on a button!
    // close the modal
    closeFn();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file was selected
    if (file) {
      // Check if the file type is allowed
      if (file.type === "application/pdf" || file.type.startsWith("image/")) {
        // File type is allowed, handle the file
        // setUploadMessage('File uploaded:', file.name);
        setUploadMessage({
          ...uploadMessage,
          message: `File uploaded: ${file.name}`,
        });
        // You can perform additional actions here, such as uploading the file to a server
      } else {
        // File type is not allowed, show an error message
        setUploadMessage({
          ...uploadMessage,
          message: "File type not allowed. Please select a PDF or image file.",
          color: "red-900",
        });
      }
    }
  };

  const handlePaymentReciept = (event) => {
    // handle payment receipt upload!
    handleFileChange(event);
  };

  const [btnLoading, setIsLoading] = useState(false);

  const handleUserPaymentStatusUpdate = () => {
    axios.patch("/api/user/update", {
      id: _id,
    });
  };

  // USING API'S
  // const handlePaymentBtn = () => {
  //   setIsLoading(true);
  //   axios
  //     .post("/api/payment", {
  //       email: email,
  //       id: _id,
  //     })
  //     .then((res) => {
  //       // console.log(res.data.result.data.data.authorization_url);
  //       // Redirect to another url
  //       router.push(res.data.result.data.data.authorization_url);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const fetching = async () => {
    setIsLoading(true);
    try {
      const paystackResponse = await axios.post("/api/payment", {
        email: email,
        id: _id,
      });
      const updateUserPaymentStatusResponse = await axios.patch(
        "/api/user/update",
        {
          id: _id,
        }
      );
      return { paystackResponse, updateUserPaymentStatusResponse };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleClickOfPaymentBtn = () => {
    fetching()
      .then(({ paystackResponse }) => {
        router.push(paystackResponse.data.result.data.data.authorization_url);
      })
      .catch((error) => console.log(error));
  };

  //USING SERVER SIDE
  const handlePaymentRouting = () => {
    router.push("/payment");
  };

  const orderDetailsCardStyle =
    "font-semibold py-5 text-base flex flex-wrap items-center gap-1 border border-transparent hover:border-gray-500y transition-all duration-300 rounded-md hover:px-[2px]";
  return ReactDOM.createPortal(
    <section className="fixed inset-0 md:z-[9999999] bg-white md:bg-[rgba(0,0,0,0.7)] md:grid md:place-content-center pt-[15vh] md:pt-0 overflow-y-scroll ">
      <div className="flex flex-col gap-4 items-end">
        <button
          onClick={handleClose}
          className=" w-fit hidden md:inline-block font-medium active:scale-95 hover:scale-[.98] transition-transform ease-in-out duration-300 uppercase text-sm bg-red-600 text-black border-none px-4 py-1 rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed"
        >
          close
        </button>
        <main className="lg:w-fit mx-auto">
          <div className="w-full py-10 px-10 bg-white rounded-lg flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 min-h-[500px] relative">
            <button onClick={handleClose} className="absolute top-3 right-3 text-black text-3xl active:scale-95 transition-transform ease-in-out duration-300 md:hidden">
              <MdOutlineClose />
            </button>
            {/* ORDER DETAILS...... */}
            <div className="space-y-3 order-1 ">
              <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-start justify-between">
                <h2 className="font-semibold text-black md:text-xl ">
                  ORDER DETAILS
                </h2>
                <div className="font-medium md:text-xl h-[50px]y hover:bg-transparent transition-colors duration-500 text-white py-1 px-1  md:text-black border cursor-pointer bg-black">
                  <span>{`${_id}`}</span>
                </div>
              </div>
              <div className="order-details w-full flex md:grid grid-cols-1 md:grid-cols-2  text-black flex-col justify-centery items-starty gap-5">
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    FullName :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)] font-mono">
                    {`${firstName} ${lastName}`}
                  </span>
                </p>
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    Email :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)]  font-mono">
                    {email}
                  </span>
                </p>
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    Pick Up Location :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)] font-mono">
                    {/* Wimpy Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam, dignissimos? */}
                    {pickupLocation}
                  </span>
                </p>
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    Drop Off Location :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)] font-mono">
                    {dropoffLocation}
                  </span>
                </p>
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    Start Date :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)] font-mono">
                    {/* 12/04/2023 */}
                    {startDate}
                  </span>
                </p>
                <p className={orderDetailsCardStyle}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    End Date :
                  </span>
                  <span className="text-[rgba(0,0,0,0.8)] font-mono">
                    {/* 24/04/2023 */}
                    {endDate}
                  </span>
                </p>
                <p className={`${orderDetailsCardStyle} col-span-2`}>
                  <span className="inline-block p-1 bg-[#011F26] text-white skew-x-[-3deg] text-sm">
                    Vehicles :
                  </span>
                  <div className="flex items-center flex-wrap text-xs md:text-sm">
                    {carsSelected.map((cars) => (
                      <span
                        key={v4()}
                        className="text-[rgba(0,0,0,0.8)] bg-gray-200 capitalize border-r p-2 md:p-1 mr-2 font-mono"
                      >
                        {cars}
                      </span>
                    ))}
                  </div>
                </p>
              </div>
            </div>
            {/* PAYMENT ACCOUNT DETAILS */}
            <div className="space-y-3 md:space-y-8 md:order-2 border-b pb-5">
              <h2 className="font-semibold text-black md:text-xl uppercase h-fit">
                Payment Details
              </h2>
              {paymentStatus ? (
                <div className="flex h-fit justify-start items-center gap-2">
                  <p className="font-medium bg-[#011F26] text-white skew-x-[-3deg] py-1 px-2 text-sm uppercase">
                    Payment Status
                  </p>
                  <p className="font-medium text-base bg-green-800 py-1 px-10 rounded-md text-white uppercase">
                    Paid
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="font-semibold text-black text-sm uppercase">
                    click on the button below to proceed to payment
                  </p>
                  <div className="payment-btn-container flex justify-start items-baseline gap-2">
                    <button
                      disabled={btnLoading}
                      onClick={handleClickOfPaymentBtn}
                      className="font-medium active:scale-95 hover:scale-[.98] transition-transform ease-in-out duration-300 uppercase text-base bg-black text-white border-none px-4 py-2 rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed"
                    >
                      payment
                    </button>
                    {btnLoading && (
                      <p className="font-medium text-black text-xs">
                        processing...
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* <div className="space-y-3 relative">
            <h2 className="font-semibold text-black text-xl uppercase">
              Account Details
            </h2>
            <div className="border rounded-md space-y-3 py-10 px-5 ">
              <div className="flex items-center gap-2">
                <span className="text-black text-sm font-medium">
                  Account Name :{" "}
                </span>
                <span className="text-black text-base font-semibold uppercase">
                  {" "}
                  Cia Luxury Fleet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black text-sm font-medium">
                  Account Number :{" "}
                </span>
                <span className="text-black text-base font-semibold uppercase">
                  {" "}
                  0098873421
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black text-sm font-medium">
                  Bank Name :{" "}
                </span>
                <span className="text-black text-base font-semibold uppercase">
                  Access Bank
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black text-sm font-medium">
                  Amount :{" "}
                </span>
                <span className="text-black text-base font-semibold uppercase">
                  #340,000
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-black text-sm font-medium">Note : </span>
                <span className="text-black text-xs font-semibold uppercase">
                  The amount above is gotten by multiplying the amount for
                  hiring the individual vehicle by the amount of days and sum it
                  up in the case of multiple vehicles.
                </span>
              </div>
            </div>
            <p className="text-red-500 text-sm">
              Note: Please endeavour to use your order Id as the narration when
              making payment as that will be used to identify the payment is
              from you.{" "}
            </p>
            <div className="upload-payment-btn-container ">
              <label
                htmlFor="upload"
                className="payment-btn text-black flex flex-col gap-1 px-2 py-1 font-medium capitalize"
              >
                <span className="text-xs uppercase">Upload Receipt</span>
                <input
                  type="file"
                  accept=".pdf, image/*"
                  onChange={handlePaymentReciept}
                />
                <p
                  className={`text-xs font-medium text-${uploadMessage.color}`}
                >
                  {uploadMessage.message}
                </p>
              </label>
            </div>
          </div> */}
          </div>
        </main>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

export default OrderDetails;
