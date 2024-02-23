import React from "react";
import {v4} from 'uuid'


const CategoryListCard = ({ data, selectedCar }) => {
  return (
    <div className="h-[300px]y py-5 w-[300px] bg-[rgba(34,73,82,0.23)] rounded-lg flex flex-col justify-center overflow-y-scroll p-3 gap-5 items-center">
      {data.catalog.map((datum) => (
        <button onClick={() => selectedCar(datum.name)} key={v4()} className="w-full px-2 py-3 font-medium text-[rgba(225,225,225,0.7)] hover:translate-x-1 transition-transform duration-300 ease-in-out text-sm bg-[rgba(34,73,82,0.13)] bordery border-gray-500 uppercase ">
            {datum.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryListCard;
