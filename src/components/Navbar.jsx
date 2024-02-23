"use client";

import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMeun = () => {
    setOpenMenu(!openMenu);
  };

  const liSpanStyle =
    "py-1 px-2  hover:text-primaryYellow transition-all cursor-pointer hover:left-6 hover:scale(1.1)";

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollmd = (id) => {
    handleOpenMeun();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClose = (e) => {
    if (e.target.classList.contains("navmenu")) {
      handleOpenMeun();
    }
  };

  //  true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <div className="bg-[#011F26] lg:bg-transparent fixed w-[100%] top-0 lg:relative z-[9999] lg:z-[0]">
      <nav className=" h-[15vh] md:h-[8vh]  bg-[#011F26] lg:bg-transparent lg:h-[20vh] flex items-center gap-x-4 lg:gap-x-10 containerz md:relative before:absolute before:top-0 before:left-[-60px] xl:before:left-[-110px] before:w-[50px] lg:before:w-[100px] before:h-[8vh] lg:before:h-[200px] xl:before:h-[150px] before:bg-[#D98E04] before:z-[0]">
        <div className=" py-1 px-2 border-2 border-ry-[#D98E04] border-white font-[450] text-xl flex flex-col items-center lg:mr-10">
          <span className="text-[16px] leading-tight">CIA</span>
          <span className="text-[14px] leading-tight font-bold">Luxury</span>
          <span className="text-[12px] leading-tight italic">Fleet</span>
        </div>
        <div className="m-0 lg:hidden">
          {!openMenu ? (
            <span
              className="text-2xl p-2 flex flex-col gap-y-1  text-white mb-[7px]"
              onClick={handleOpenMeun}
            >
              {/* <GiHamburgerMenu/> */}
              <span className="w-6 h-[3px] rounded bg-white "></span>
              <span className="w-5 h-[3px] rounded bg-white "></span>
              <span className="w-4 h-[3px] rounded bg-white "></span>
              {/* Lorem ipsum  */}
            </span>
          ) : (
            <motion.span
              className="text-2xl p-2  text-white block mb-[7px]"
              initial={{ opacity: 0, x: 20, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, type: "tween" }}
              onClick={handleOpenMeun}
            >
              <MdOutlineClose />
            </motion.span>
          )}
        </div>

        {openMenu && (
          <div
            className="fixed lg:hidden top-[15vh] md:top-[8vh] left-0 h-[100vh]  w-[100vw] bg-[rgba(3,101,123,0.6)]y bg-[rgba(0,0,0,0.6)] navmenu"
            onClick={handleClose}
          >
            <ul className="flex flex-col gap-5 uppercase text-[14px] font-medium w-full bg-[rgba(3,101,123,1)] py-5 px-5">
              <li>
                <Link href={"/"} className={liSpanStyle}>
                  home
                </Link>
              </li>
              {/* <li><span className={liSpanStyle} onClick={()=>handleClickScrollmd('contactUs')}>contact</span></li> */}
              <li>
                <a
                  href="#contactUs"
                  className="py-1 px-2 hover:outline hover:outline-white outline-1 transition-all cursor-pointer hover:left-2 hover:scale(1.1) active:text-black"
                >
                  contact
                </a>
              </li>

              {/* <li>
                <Link
                  href={"/team"}
                  className={liSpanStyle}
                  onClick={() => handleClickScrollmd("services")}
                >
                  Team
                </Link>
              </li> */}
              <li>
                <Link
                  href={"/fleet"}
                  className={liSpanStyle}
                  onClick={() => handleClickScrollmd("fleet")}
                >
                  fleet
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className={liSpanStyle}
                  onClick={() => handleClickScrollmd("aboutUs")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/order"}
                  className={liSpanStyle}
                  onClick={() => handleClickScrollmd("aboutUs")}
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ul className="hidden lg:flex gap-5 uppercase text-[14px] font-medium nav-list">
          <Link href={"/"}>
            <span className={liSpanStyle}>home</span>
          </Link>
          <li>
            <span
              className={liSpanStyle}
              onClick={() => handleClickScroll("contactUs")}
            >
              contact
            </span>
          </li>
          {/* <Link href={"team"}>
            <span className={liSpanStyle}>Team</span>
          </Link> */}
          <Link href={"/fleet"}>
            <span className={liSpanStyle}>fleet</span>
          </Link>
          <Link href={"/about"}>
            <span className={liSpanStyle}>About Us</span>
          </Link>
          <Link href={"/order"}>
            <span className={liSpanStyle}>Order</span>
          </Link>
        </ul>
        {/* <ul className='hidden lg:flex gap-5 uppercase text-[14px] font-medium'>
        <li><span className={liSpanStyle} >home</span></li>
        <li><span className={liSpanStyle} onClick={()=>handleClickScroll('contactUs')}>contact</span></li>
        <li><span className={liSpanStyle} onClick={()=>handleClickScroll('services')}>Team</span></li>
        <li><span className={liSpanStyle} onClick={()=>handleClickScroll('fleet')}>fleet</span></li>
        <li><span className={liSpanStyle} onClick={()=>handleClickScroll('aboutUs')}>About Us</span></li>
       </ul> */}
        <div className="ml-auto">
          <button className="flex items-center gap-1 md:gap-2 bordert py-1 md:py-2 px-2 md:px-4 font-semibold bg-[#D98E04] phone-container">
            <AiOutlinePhone className="phoneShake" />
            phone-0908765342
          </button>
        </div>
      </nav>

      {/* <img src="" alt="" srcset="" /> */}
    </div>
  );
};

export default Navbar;
