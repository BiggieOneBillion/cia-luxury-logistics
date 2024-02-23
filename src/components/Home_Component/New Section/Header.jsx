import React from "react";

const Header = () => {
  function gotoContact(e) {
    e.preventDefault();
    const targetSection = document.getElementById('contactUs');
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="flex justify-between items-center my-10">
      <div className="space-y-3">
        <h1 className="font-bold text-[32px] leading-[48px] text-[rgba(225,225,225,0.9)] 2xl:text-white">
          CAR COLLECTION
        </h1>
        <p className="font-light lg:hidden leading-[20px] text-sm text-[rgba(225,225,225,0.8)] flex flex-col">
          <span>
            Browser through our car collection <br />
            to see which is your best fit.
          </span>
        </p>
        <p className="hidden font-light leading-[20px] text-sm text-[rgba(225,225,225,0.8)] lg:flex flex-col">
          <span>
            Browser through our car collection to see which is your best fit.
          </span>
          <span>Or contact our customer for consultations and inquiries</span>
        </p>
      </div>
      <button onClick={gotoContact} className="bg-[#D98D06] px-10 py-3  text-[15px] text-white font-medium">
        Contact Us
      </button>
    </div>
  );
};

export default Header;
