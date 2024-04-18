import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { useFormDatum } from "@/Context/FormData";

const CarAmount = ({ data, remove, btnDisable }) => {
  const { formDatum, setFormDatum } = useFormDatum();

  const [quantity, setQuantity] = useState(1);

  const addMore = () => {
    if (data.quantity === 10) {
      return;
    } else {
      // setQuantity((prev) => prev + 1);
      let newArr = formDatum.carSelected.map((x) => {
        if (x.vehicle === data.vehicle) {
          x.quantity++;
          return x;
        }
        return x;
      });
      // console.log(newArr);
      setFormDatum({ ...formDatum, carSelected: newArr });
    }
  };

  const minusMore = () => {
    if (quantity === 1) {
      return;
    } else {
      let newArr = formDatum.carSelected.map((x) => {
        if (x.vehicle === data.vehicle) {
          x.quantity--;
          return x;
        }
        return x;
      });
      setFormDatum({ ...formDatum, carSelected: newArr });
    }
  };

  // console.log(formDatum);

  return (
    <div className="flex justify-start gap-3 items-center">
      <h2 className="text-[15px] font-semibold">{data.vehicle}</h2>
      <div className="ml-auto flex items-center">
        <button className="px-3 py-2 text-[rgba(0,0,0,0.5)]" onClick={addMore} disabled={btnDisable}>
          <AiOutlinePlus />
        </button>
        <span className="px-3 py-1 border border-primaryBluet border-[rgba(0,0,0,0.5)] text-[15px] text-black font-semibold">
          {data.quantity}
        </span>
        <button className="px-3 py-2 text-[rgba(0,0,0,0.5)]" onClick={minusMore} disabled={btnDisable}>
          <AiOutlineMinus />
        </button>
      </div>
      {/* DELETE BTN */}
      {/* <div onClick={()=> remove(data)}>
    <motion.span whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='text-red-700 text-xl cursor-pointer'>
      <MdOutlineDeleteOutline />
   </motion.span>
    </div> */}
    </div>
  );
};

export default CarAmount;
