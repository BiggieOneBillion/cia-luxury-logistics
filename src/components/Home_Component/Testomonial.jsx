import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const Testomonial = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: true });
  return (
    <section
      ref={containerRef}
      className="text-gray-400 bg-gray-900y bg-primaryBlue body-font  lg:w-[95%] 2xl:w-[1300px] mx-auto"
    >
      <div className=" px-5 py-24 mx-auto">
        <p className="text-lg font-semibold mb-2 text-center">
          Reviewed by People
        </p>
        <h1 className="text-[2rem] font-bold title-font text-white mb-12 text-center">
          Clients'{" "}
          <span className="bg-primaryYellow px-2 py-1">Testimonials</span>
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <motion.div
              style={{
                transform: isInView ? "none" : "translateY(-20px)",
                opacity: isInView ? 1 : 0.5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="h-full bg-gray-800t bg-white bg-opacity-40r text-primaryBlue p-8 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                They exemplifies unparalleled competence and professionalism in
                logistics. Their drivers, known for clean etiquette, prioritize
                safety with strict adherence to road rules, maintaining optimal
                speed, and safe distances. Trust them for a journey of
                reliability and quality
              </p>
              <a className="inline-flex items-center">
                
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-500">
                    Samuel Osita
                  </span>
                  <span className="text-gray-500 text-sm">NETWORK ENGINEER</span>
                </span>
              </a>
            </motion.div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <motion.div
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0.5,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="h-full bg-gray-800 bg-opacity-40 p-8 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                Choosing this company was a game-changer!  The service delivery is nothing short of
                excellent, setting a new benchmark in the industry. This is a company where competence meets customer satisfaction!. I would definitely be using them when next I am in need of a logistics service.
              </p>
              <a className="inline-flex items-center">
              
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Alex Duru
                  </span>
                  <span className="text-gray-500 text-sm">C.E.O SHOOLY BRANDT</span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
