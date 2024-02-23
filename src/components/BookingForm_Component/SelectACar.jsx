import React, { useState } from "react";
import Carcards from "./Carcards";
import { busData, carData, suvData } from "../../data/CarData";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useFormDatum } from "../../Context/FormData";

const SelectACar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { setNextForm } = useGlobalContext();

  // const handleCarData = (name) => {
  //   setFormDatum({...formDatum,  carSelected: [...formDatum.carSelected, name]})
  //   console.log(formDatum);
  // }

  const [selectedCars, setSelectedCar] = useState([]);

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-y-4 overflow-y-scrollu">
      <ul className="flex items-center gap-x-4 ">
        <li
          className={`cursor-pointer hover:bg-black hover:text-white transition-all px-4 py-1 rounded-sm border border-black text-black ${
            currentTab === 0 ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => {
            setCurrentTab(0);
          }}
        >
          Suv
        </li>
        <li
          className={`cursor-pointer hover:bg-black hover:text-white transition-all px-4 py-1 rounded-sm border border-black text-black ${
            currentTab === 1 ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          Car
        </li>
        <li
          className={`cursor-pointer hover:bg-black hover:text-white transition-all px-4 py-1 rounded-sm border border-black text-black ${
            currentTab === 2 ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          Bus
        </li>
      </ul>
      <div>
        <div
          className={`tab0_content ${
            currentTab === 0 ? "" : "hidden"
          } flex flex-col gap-y-5 mb-10`}
        >
          {suvData.map((suv) => (
            <Carcards key={uuidv4()} data={suv} />
          ))}
        </div>
        <div
          className={`tab1_content ${
            currentTab === 1 ? "" : "hidden"
          }  flex flex-col gap-y-5 mb-10`}
        >
          {carData.map((car) => (
            <Carcards key={uuidv4()} data={car} />
          ))}
        </div>
        <div
          className={`tab2_content ${
            currentTab === 2 ? "" : "hidden"
          }  flex flex-col gap-y-5 mb-10`}
        >
          {busData.map((bus) => (
            <Carcards key={uuidv4()} data={bus} />
          ))}
        </div>
      </div>
      <button
        className="w-full py-3 rounded-sm font-semibold text-[18px] bg-primaryBlue text-white bg-[#011F26] mb-10"
        onClick={() => setNextForm(2)}
      >
        Continue
      </button>
    </div>
  );
};

export default SelectACar;
