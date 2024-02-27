"use client"
import { useGlobalContext } from "@/Context/GlobalContext";
import React from "react";


// Mobile Display only
const HeroSectionMobile = () => {
const { handleBookNow } = useGlobalContext();

const handleClick = () => {
  return handleBookNow();
};

  return (
    <div className="font-roboto">
      <div className="h-screen w-screen pt-[140px] py-5 flex flex-col gap-10 ">
        <div className="title-content   px-5">
          <h1 className="font-medium text-white text-wrap text-[30px] mb-1">
            Luxury LifeStyle <br /> Rentals
          </h1>
          <p className="description text-[rgba(225,225,225,0.4)] text-sm font-medium font-sans mb-2">
            Elevate your journey with sophistication, comfort, and style.
            Explore our collection now
          </p>
          <button onClick={handleClick} className=" mt-5  text-sm active:scale-95 transition-transform duration-300 ease-in-out  py-2 px-4 font-semibold bg-[#D98E04] cursor-pointer">
            Book Now
          </button>
        </div>

        <div className="heroimg-container h-full ml-10 flex-1">
          <img
            src={"/images/heroImgResize.jpg"}
            alt=""
            className="h-full aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
