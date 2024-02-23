import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const SectionAboutUs = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const ref3 = useRef(null)
  const isInView = useInView(ref2, { amount: 0.45, once: true });
  let { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      ref={ref2}
      className="mb-10 md:mb-[150px] md:h-[60vh] lg:h-[140vh] grid md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-y-5 md:gap-0"
    >
      {/* IMG CONTAINER */}
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-20px)",
          opacity: isInView ? 1 : 0.5,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="bg-about"
      >
        {/* <img src={AboutImg1} alt="about us image" className='object-cover object-right-bottom' /> */}
      </motion.div>
      {/* ABOUT US */}
      <motion.div
        ref={ref1}
        style={{ y }}
        className="relative pl-10 pt-10 md:pt-0 lg:pt-10 pr-[10%] flex justify-center items-center"
        id="aboutUs"
      >
        <div className="hidden absolute h-[100px] w-[50px] bg-[#d98e04] top-[20%] left-[-25px] lg:flex flex-col items-center"></div>
        <div className="xl:w-[80%] flex flex-col gap-3 ">
          <h2 className="text-[30px] font-medium ">
            ABOUT <span className="text-[#d98e04]">US</span>
          </h2>
          <p>
          Welcome to CIA LUXURY FLEET, your trusted logistics partner in Nigeria! With a legacy spanning over half a decade, we take pride in our unwavering commitment to customer satisfaction and safety. Having served over 200 clients nationwide, we specialize in providing top-notch vehicle rental and leasing services to individuals and businesses alike. 
          </p>
        </div>
      </motion.div>
      {/* SERVICES */}
      <motion.div
        style={{ y }}
        className="flex px-5 md:px-20 md:flex-end lg:px-20 items-center order-1 md:order-[0]"
        id="services"
      >
        <p className="lg:w-[80%] md:pt-10 lg:pt-0">
        Our fleet is tailored to meet diverse transportation needs, ensuring efficiency and reliability. Headquartered in the vibrant city of Port Harcourt, our strategic presence enables seamless operations across Nigeria. At CIA LUXURY FLEET, we blend experience with innovation to deliver logistics solutions that exceed expectations. Your journey is our priority – choose reliability, choose CIA LUXURY FLEET.
        </p>
      </motion.div>
      {/* SERVICE IMG */}
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0.5,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="bg-service relative md:right-[10%] z-[-1]"
      >
        {/* <img src={ServiceImg} alt="about us image" className='object-cover object-right-bottom' /> */}
      </motion.div>
    </div>
  );
};

export default SectionAboutUs;
