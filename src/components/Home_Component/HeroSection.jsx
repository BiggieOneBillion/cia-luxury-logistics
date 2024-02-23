"use client";

import React, { useEffect, useRef } from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
// import hero1 from '/images/heroImgResize.jpg'
// import { Tooltip } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'
import { useGlobalContext } from "../../Context/GlobalContext";
import { motion, useTransform, useScroll } from "framer-motion";

const HeroSection = () => {
  const { handleBookNow, bookNow } = useGlobalContext();

  const ImgRef = useRef(null);

  let { scrollYProgress, scrollY } =
    useScroll();
    //   {
    //   target:ImgRef,
    //   offset: ["start start","center end"]
    // }
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // console.log(bookNow);

  const handleClick = () => {
    return handleBookNow();
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "tween",
        ease: "linear",
        duration: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: -10, opacity: 0, originY: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    bookNow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [bookNow]);

  return (
    <div className="bg-hero-section ">
      <div className="bordery mt-[15vh] md:mt-[8vh] h-[85vh] md:h-[50vh] lg:h-[70vh] lg:mt-5 flex justify-end gap-10 containerz pt-20 ">
        {/* SOCIAL MEDIA LINKS */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-col gap-10 xl:gap-14 "
        >
          <motion.li variants={item} className="cursor-pointer social-links">
            <span className="relative" data-descr="facebook">
              <FiFacebook />
            </span>
          </motion.li>
          <motion.li
            variants={item}
            title="Twitter"
            className="cursor-pointer social-links"
          >
            <span className="relative" data-descr="Twitter">
              <FiTwitter />
            </span>
          </motion.li>
          <motion.li
            variants={item}
            title="Instagram"
            className="cursor-pointer social-links"
          >
            <span className="relative" data-descr="Instagram">
              <FaInstagram />
            </span>
          </motion.li>
          <motion.li
            variants={item}
            title="WhatsApp"
            className="cursor-pointer social-links"
          >
            <span className="relative" data-descr="whatsapp">
              <FaWhatsapp />
            </span>
          </motion.li>
          <motion.li
            variants={item}
            title="Pinterest"
            className="cursor-pointer social-links"
          >
            <span className="relative" data-descr="Pinterest">
              <ImPinterest2 />
            </span>
          </motion.li>
        </motion.ul>
        <motion.div className="flex flex-col justify-start gap-y-5 font-extrabold text-[50px] xl:text-[80px] lg:text-[60px] w-[200px]">
          <motion.span
            initial={{ x: -20, opacity: 0, originX: 0 }}
            animate={{ x: 0, opacity: 1, originX: 0 }}
            transition={{ duration: 0.4 }}
            className=" mt-[-20px] lg:mt-[-40px] text-[1em]"
          >
            LUXURY
          </motion.span>
          <motion.span
            initial={{ x: -20, opacity: 0, originX: 0 }}
            animate={{ x: 0, opacity: 1, originX: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-[1em]"
          >
            LIFESTYLE
          </motion.span>
          <motion.span
            initial={{ x: -20, opacity: 0, originX: 0 }}
            animate={{ x: 0, opacity: 1, originX: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="text-[1em]"
          >
            RENTALS
          </motion.span>
          <button
            className="mt-auto mb-20 bg-primaryYellow text-base border-2 py-2 font-medium border-r-[#D98E04] border-b-[#D98E04] cursor-pointer hover:text-[rgba(255,255,255,0.7)] relative z-[100] transition-all  hover:border-4 hover:border-l-[#D98E04] hover:border-t-[#D98E04] hover:border-r-white hover:border-b-white "
            onClick={handleClick}
          >
            Book Now
          </button>
          {/* <button className='text-base cursor-pointer'>Book Now</button> */}
        </motion.div>
        <motion.div
          style={{ marginRight: y }}
          className="flex-1 relative h-[100%] flex justify-end "
        >
          <motion.img
            style={{ y }}
            ref={ImgRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={"/images/heroImgResize.jpg"}
            alt=""
            className="hidden lg:block absolute top-[-35vh]  z-[-1] w-[200%] h-[94vh] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
