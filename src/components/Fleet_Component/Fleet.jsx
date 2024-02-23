import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Carcards from "../BookingForm_Component/Carcards";
import FleetCars from "./FleetCars";
import { AllCarData } from "../../data/CarData";
import { howItWorksData } from "../../data/FleetData";
import { v4 as uuidv4 } from "uuid";
import { MdCall } from "react-icons/md";

const Fleet = () => {
  return (
    <div className="mt-[15vh] lg:mt-0 flex flex-col gap-y-10 mb-10 ">
      <div className="fleet-hero-section flex flex-col justify-center h-[35vh] lg:h-[55vh] px-2 lg:px-24 gap-4">
        <h1 className="font-bold text-3xl">FLEET VEHICLES</h1>
        <p className="font-medium ">
          Home / <span className="text-primaryYellow">Fleet</span>
        </p>
      </div>
      <section className="card-container grid grid-cols-1 md:pl-12 lg:pl-0 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-10 containerz borderu place-content-center">
        {AllCarData.map((carDatum) => (
          <FleetCars carDatum={carDatum} key={uuidv4()} />
        ))}
      </section>

      <div className="mt-20 flex flex-col gap-y-5 containerz">
        <div className="flex flex-col items-center gap-y-4">
          <p className="font-medium text-2xl">How it Works</p>
          <h2 className="text-[35px] font-bold capitalize text-center">
            Quick & easy rental service
          </h2>
        </div>
        <div className="howitworks_section gap-5">
          {howItWorksData.map((datum) => (
            <div key={uuidv4()} className="flex flex-col gap-3 items-center">
              <div className="imgdiv bg-inherent">
                <img
                  src={datum.image}
                  alt=""
                  className="block mix-blend-screen"
                />
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h2 className="font-bold text-[28px] text-center">
                  {datum.title}
                </h2>
                <p className="text-[rgba(255,255,255,0.7)] text-base text-center">
                  {datum.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reach-us-bg flex flex-col lg:flex-row lg:justify-between h-[30rem] lg:px-[10%] justify-center items-center text-white mt-16 lg:h-[20rem]">
        <div>
          <h2 className="font-bold text-[2rem] text-center lg:text-start capitalize ">
            Book a car by <br className="hidden lg:block" /> getting in touch
            with us
          </h2>
        </div>
        <div>
          <p className="font-medium text-center flex items-center justify-center gap-1 text-lg">
            <MdCall />
            call to book
          </p>
          <h2 className="font-bold text-[2rem] text-primaryYellow">
            (567) 498-4600
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
