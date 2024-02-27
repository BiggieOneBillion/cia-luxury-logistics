"use client";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import CategoryListCard from "./CategoryListCard";
import Header from "./Header";
import {data} from '../../../data/OurCarDisplayData';

const OurCarDisplay = () => {

  const [category, setCategory] = useState(0);
  const [selectedCar, setSelectedCar] = useState("");

  const handleSelectCategory = (index) => {
    setCategory(index);
    setSelectedCar('');
  };

  // const result = data[category].catalog.filter(
  //   (info) => info.name === selectedCar
  // );

  useEffect(() => {
    setSelectedCar(data[category].catalog[0].name);
  },[category])

  return (
    <div className="space-y-3 mt-[200px] mb-10 md:px-20 2xl:w-[80%] mx-auto hidden md:block">
      <Header />
      <div className="w-full h-[500px] bg-transparent grid md:grid-cols-2 lg:grid-cols-[400px_1fr_1fr] gap-10">
        {/* car deplay card */}
        {/* first section */}
        <section className="h-[500px] flex flex-col gap-2 justify-center items-center">
          <div className="flex  w-[300px] bg-[rgba(34,73,82,0.23)] justify-start items-center gap-5 p-2 rounded-lg">
            {data.map((vehicleCatagory, i) => (
              <button
                key={v4()}
                onClick={() => handleSelectCategory(i)}
                className={`${
                  category == i ? "bg-[rgba(34,73,82,0.5)]" : "bg-transparent"
                } rounded-md block px-3 py-1 basis-1/3 text-base font-semibold text-[rgba(225,225,225,0.8)] btn-car-select-category hover:text-white transition-colors duration-[1s] ease-in-out uppercase`}
              >
                {vehicleCatagory.vehicleType}
              </button>
            ))}
          </div>
          {category === 0 && (
            <CategoryListCard data={data[0]} selectedCar={setSelectedCar} />
          )}
          {category === 1 && (
            <CategoryListCard data={data[1]} selectedCar={setSelectedCar} />
          )}
          {category === 2 && (
            <CategoryListCard data={data[2]} selectedCar={setSelectedCar} />
          )}
        </section>
        {/* second section */}
        <section className="flex justify-center items-center">
          {selectedCar ? (
            <div className="h-[400px] w-[400px] overflow-hidden">
              <img
                src={
                  data[category].catalog.filter(
                    (info) => info.name === selectedCar
                  )[0].img
                }
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <p className="text-[rgba(225,225,225,0.5)] font-bold text-lg">
              {/* Select A Vehicle */}
              Loading....
            </p>
          )}
        </section>
        {/* third section */}
        <section className=" hidden lg:block">
          {data[category].catalog
            .filter((info) => info.name === selectedCar)
            .map((datum) => (
              <div key={v4()} className="h-full w-full flex flex-col items-start justify-center gap-5">
                <span className="text-xs text-[rgba(225,225,225,0.8)] font-medium uppercase">
                  Vehicle name : {datum.name}
                </span>
                <span className="text-xs text-[rgba(225,225,225,0.8)] font-medium uppercase">
                  Description : {datum.description}
                </span>
                <span className="text-xs text-[rgba(225,225,225,0.8)] font-medium uppercase">
                  No of passengers : {datum.noOfPassengers} persons
                </span>
                <span className="text-xs text-[rgba(225,225,225,0.8)] font-medium uppercase">
                  Fueling Capacity : {datum.fuelingCapacity}
                </span>
                <span className="text-xs text-[rgba(225,225,225,0.8)] font-medium uppercase">
                  Drivetrain : {datum.type}
                </span>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default OurCarDisplay;
